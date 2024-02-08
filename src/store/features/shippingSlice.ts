import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IShipping {
  type: string;
  description: string;
  cost: number;
}

interface IShippingState {
  shippings: IShipping[];
  selected: IShipping | null;
}

const initialState: IShippingState = {
  shippings: [],
  selected: null,
};

export const fetchShippings = createAsyncThunk('shipping/fetchShippings', async () => {
  const response = await fetch('https://noy33phhn9.execute-api.us-east-1.amazonaws.com/dev/api/freight', {
    method: 'GET',
  });
  const data = await response.json();
  return data;
});

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    selectShipping: (state, action: PayloadAction<{ type: string }>) => {
      state.selected = state.shippings.find(shipping => shipping.type === action.payload.type) || null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchShippings.fulfilled, (state, action) => {
      console.log(action.payload);
      state.shippings = action.payload;
    });
  },
});

export const { selectShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
