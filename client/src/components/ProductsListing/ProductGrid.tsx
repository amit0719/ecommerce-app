import ProductCard from "./ProductCard";
import { appData } from "../../data";

const ProductGrid = () => {
  return (
    <div className="container">
      <div className="row">
        {appData.products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
