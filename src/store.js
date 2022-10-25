import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products";
import cartSlice from "./features/cart";
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
