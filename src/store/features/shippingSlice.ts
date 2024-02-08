import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
  shippings: [
    {
      type: 'standard',
      description: '3-5 business days',
      cost: 5,
    },
    {
      type: 'express',
      description: '1-2 business days',
      cost: 10,
    },
  ],
  selected: null,
};

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    selectShipping: (state, action: PayloadAction<{ type: string }>) => {
      state.selected = state.shippings.find(shipping => shipping.type === action.payload.type) || null;
    },
  },
});

export const { selectShipping } = shippingSlice.actions;

export default shippingSlice.reducer;
