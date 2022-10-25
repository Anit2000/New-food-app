import { useDispatch } from "react-redux";
import { displayCart } from "../features/cart";
import { Cart } from "../icon/Icons";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const toggleDisplay = () => {
    dispatch(displayCart());
  };
  return (
    <header>
      <div className="logo">Logo</div>
      <span className="cart-icon" onClick={toggleDisplay}>
        <Cart />
        <span className="count">0</span>
      </span>
    </header>
  );
};
export default Header;
