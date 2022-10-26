import "./CartFooter.css";
import { useSelector } from "react-redux";
const CartFooter = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <div className="cart-footer">
      <hr />
      <h3>
        Total<span>${amount}</span>
      </h3>
    </div>
  );
};
export default CartFooter;
