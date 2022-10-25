import "./ProductNav.css";
import { filterProduct } from "../features/products";
import { useDispatch } from "react-redux";
import { useState } from "react";
const ProductNav = () => {
  const [currentActive, setActive] = useState("All");
  const dispatch = useDispatch();
  const filterData = (e) => {
    let value = e.target.textContent;
    dispatch(filterProduct(value));
    setActive(value);
  };
  return (
    <div className="productNav">
      <button
        className={currentActive == "All" && "active"}
        onClick={filterData}
      >
        All
      </button>
      <button
        onClick={filterData}
        className={currentActive == "Burger" && "active"}
      >
        Burger
      </button>
      <button
        onClick={filterData}
        className={currentActive == "Noodles" && "active"}
      >
        Noodles
      </button>
      <button
        onClick={filterData}
        className={currentActive == "Fries" && "active"}
      >
        Fries
      </button>
    </div>
  );
};
export default ProductNav;
