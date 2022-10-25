import Quantity from "./Quantity";
import { Close } from "../icon/Icons";
import "./CartItem.css";
const CartItem = ({ name, image, price, amount }) => {
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
        <Quantity quantity="2" />
      </div>
    </div>
  );
};
export default CartItem;
