import { useState } from "react";
import "./Quantity.css";
const Quantity = (props) => {
  const [count, setCount] = useState(props.quantity ? props.quantity : 1);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount == 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
  };
  if (props.updateQuantity) props.updateQuantity(count);
  return (
    <div className="quantity-wrap">
      <button onClick={decrement}>-</button>
      <input type="number" defaultValue={count} value={count} />
      <button onClick={increment}>+</button>
    </div>
  );
};
export default Quantity;
