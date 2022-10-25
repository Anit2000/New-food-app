import { Close } from "../icon/Icons";
import { useSelector, useDispatch } from "react-redux";
import { displayCart } from "../features/cart";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import "./Cart.css";
const Cart = () => {
  const { cartItem, amount, count, display } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const toggleDisplay = () => {
    dispatch(displayCart());
  };
  if (display) {
    return (
      <div className="cart">
        <div className="cart-header">
          <h3>Your cart</h3>
          <button onClick={toggleDisplay}>
            <Close />
          </button>
        </div>
        <main>
          {count == 0 && <EmptyCart />}
          {count >= 1 &&
            cartItem.map((item) => <CartItem key={item.id} {...item} />)}
          {count >= 1 && <CartFooter />}
        </main>
      </div>
    );
  }
};
export default Cart;
