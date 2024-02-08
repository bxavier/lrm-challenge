import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IProduct {
  name: string;
  price: number;
  stock: number;
  likes: number;
  image: string;
  amount: number;
}

interface IBasketState {
  products: IProduct[];
  amount: number;
  total: number;
}

const initialState: IBasketState = {
  products: [],
  amount: 0,
  total: 0,
};

export const fetchProducts = createAsyncThunk('basket/fetchProducts', async () => {
  const response = await fetch('https://noy33phhn9.execute-api.us-east-1.amazonaws.com/dev/api/products', {
    method: 'GET',
  });
  const data = await response.json();
  return data;
});

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increaseAmount: (state, action: PayloadAction<{ name: string }>) => {
      const product = state.products.find(product => product.name === action.payload.name);
      if (product) {
        product.amount++;
      }
    },
    decreaseAmount: (state, action: PayloadAction<{ name: string }>) => {
      const product = state.products.find(product => product.name === action.payload.name);
      if (product) {
        product.amount--;
      }
    },
    updateTotal: state => {
      state.total = state.products.reduce((acc, product) => acc + product.price * product.amount, 0);
      state.amount = state.products.reduce((acc, product) => acc + product.amount, 0);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const payload = action.payload.map((obj: IProduct) => ({ ...obj, amount: 0 }));
      state.products = payload;
    });
  },
});

export const { increaseAmount, decreaseAmount, updateTotal } = basketSlice.actions;

export default basketSlice.reducer;
