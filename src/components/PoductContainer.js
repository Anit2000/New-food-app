import ProductNav from "./ProductNav";
import Product from "./Product";
import { useSelector } from "react-redux";
const ProductContainer = () => {
  const { products } = useSelector((store) => store.products);
  return (
    <div className="productContainer">
      <ProductNav />
      <div className="product-wrap">
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default ProductContainer;
