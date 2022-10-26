import { useDispatch, useSelector } from "react-redux";
import { displayCart } from "../features/cart";
import { Cart } from "../icon/Icons";
import "./Header.css";
const Header = () => {
  const { count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toggleDisplay = () => {
    dispatch(displayCart());
  };
  return (
    <header>
      <div className="logo">Logo</div>
      <span className="cart-icon" onClick={toggleDisplay}>
        <Cart />
        <span className="count">{count}</span>
      </span>
    </header>
  );
};
export default Header;
