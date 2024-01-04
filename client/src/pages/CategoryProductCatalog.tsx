import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const CategoryProductCatalog = () => {
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

export default CategoryProductCatalog;
