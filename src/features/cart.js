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
    addToCart: (state, action) => {
      let cartItem = state.cartItem.find(
        (item) => item.name == action.payload.name
      );
      if (cartItem) {
        cartItem.amount += action.payload.amount;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
    },
    calcTotal: (state) => {
      let total = 0;
      let count = 0;
      state.cartItem.forEach(function (el, ind) {
        total += Number(el.price) * el.amount;
        count += el.amount;
      });
      state.count = count;
      state.amount = total;
    },
  },
});
export default cartSlice;
export const { displayCart, addToCart } = cartSlice.actions;
