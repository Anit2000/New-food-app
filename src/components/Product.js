import Quantity from "./Quantity";
import "./Product.css";
const Product = ({ id, image, name, price }) => {
  return (
    <div className="productItem">
      <div className="product-left">
        <div className="poducti-info">
          <h3>{name}</h3>
        </div>
        <div className="product-form">
          <Quantity />
          <button className="add">Add</button>
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
