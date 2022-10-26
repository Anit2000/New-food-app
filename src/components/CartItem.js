import Quantity from "./Quantity";
import { Close } from "../icon/Icons";
import { useState } from "react";
import { addToCart } from "../features/cart";
import "./CartItem.css";
const CartItem = ({ name, image, price, amount }) => {
  const [qn, setQn] = useState(amount);
  let data = { name, image, price, amount: qn };
  const updateQuantity = (quan) => {
    setQn(qn);
  };
  return (
    <div className="cart-item">
      <button className="remove-btn">
        <Close />
      </button>
      <div className="item-left">
        <div className="item-image">
          <img src={image} />
        </div>
      </div>
      <div className="item-right">
        <h3>{name}</h3>
        <h3>${price}</h3>
        <Quantity quantity={amount} />
      </div>
    </div>
  );
};
export default CartItem;
