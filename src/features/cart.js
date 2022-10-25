import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [
    {
      id: "9c046cb1-2865-4ad8-8af6-414c65ec69d1",
      name: "Veg Burger",
      price: "2",
      type: "Burger",
      image: "/static/media/burger-1.dbb2c72140a731361385.jpg",
      amount: 1,
    },
  ],
  amount: 0,
  count: 1,
  display: false,
};
const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    displayCart: (state) => {
      state.display = !state.display;
    },
  },
});
export default cartSlice;
export const { displayCart } = cartSlice.actions;
