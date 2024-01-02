import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductGrid = () => {
  const { products } = useSelector((state: any) => state.products);

  return (
    <div className="container">
      <div className="row">
        {products &&
          products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductGrid;
