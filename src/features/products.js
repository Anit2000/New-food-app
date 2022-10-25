import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import Burger_1 from "../images/Burgers/burger-1.jpg";
import Burger_2 from "../images/Burgers/burger-2.jpg";
import Burger_3 from "../images/Burgers/burger-3.jpg";
import Burger_4 from "../images/Burgers/burger-4.jpg";
import Fries_1 from "../images/Fries/fries-1.jpg";
import Fries_2 from "../images/Fries/fries-2.jpg";
import Fries_3 from "../images/Fries/fries-3.jpg";
import Fries_4 from "../images/Fries/fries-4.jpg";
import noodle_1 from "../images/Noodles/noodle-1.jpg";
import noodle_2 from "../images/Noodles/noodle-2.jpg";
import noodle_3 from "../images/Noodles/noodle-3.jpg";
import noodle_4 from "../images/Noodles/noodle-4.jpg";
const initialState = {
  products: [
    {
      id: uuid(),
      name: "Veg Burger",
      price: "2",
      type: "Burger",
      image: Burger_1,
    },
    {
      id: uuid(),
      name: "Non veg Burger",
      price: "3",
      type: "Burger",
      image: Burger_2,
    },
    {
      id: uuid(),
      name: "Cheese Burger",
      price: "3",
      type: "Burger",
      image: Burger_3,
    },
    {
      id: uuid(),
      name: "Double ham Burger",
      price: "4",
      type: "Burger",
      image: Burger_4,
    },
    {
      id: uuid(),
      name: "Fries",
      price: "3",
      type: "Fries",
      image: Fries_1,
    },
    {
      id: uuid(),
      name: "Honey chilly Fries",
      price: "4",
      type: "Fries",
      image: Fries_2,
    },
    {
      id: uuid(),
      name: "Honey Fries",
      price: "3",
      type: "Fries",
      image: Fries_3,
    },
    {
      id: uuid(),
      name: "Chilly Fries",
      price: "2",
      type: "Fries",
      image: Fries_4,
    },
    {
      id: uuid(),
      name: "Noodle",
      price: "3",
      type: "Noodles",
      image: noodle_1,
    },
    {
      id: uuid(),
      name: "Plain Noodle",
      price: "2",
      type: "Noodles",
      image: noodle_2,
    },
    {
      id: uuid(),
      name: "Nong veg Noodle",
      price: "4",
      type: "Noodles",
      image: noodle_3,
    },
    {
      id: uuid(),
      name: "Veg Noodle",
      price: "3",
      type: "Noodles",
      image: noodle_4,
    },
  ],
};
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addProduct: () => {
      console.log("addproduct");
    },
    filterProduct: (state, action) => {
      console.log(state);
      if (action.payload != "All") {
        state.products = initialState.products.filter(
          (item) => item.type == action.payload
        );
      } else {
        state.products = initialState.products;
      }
    },
  },
});
export default productSlice;
export const { filterProduct } = productSlice.actions;
