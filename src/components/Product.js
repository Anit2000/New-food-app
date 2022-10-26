import Quantity from "./Quantity";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart, displayCart } from "../features/cart";
import { useState } from "react";
const Product = ({ id, image, name, price, type }) => {
  const [qn, setQn] = useState(1);
  const dispatch = useDispatch();
  const add = () => {
    let data = { id, image, name, price, amount: qn, type };
    dispatch(addToCart(data));
    dispatch(displayCart());
  };
  const updateQuantity = (quantity) => {
    setQn(quantity);
  };
  return (
    <div className="productItem">
      <div className="product-left">
        <div className="poducti-info">
          <h3>{name}</h3>
        </div>
        <div className="product-form">
          <Quantity updateQuantity={updateQuantity} />
          <button className="add" onClick={add}>
            Add
          </button>
        </div>
      </div>
      <div className="product-right">
        <div className="product-image">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};
export default Product;
