import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products } = useSelector((state: any) => state.products);
  const state  = useSelector((state: any) => state);

  console.log('hey state', state)

  if(products.length === 0) {
    return <div>No products available.</div>
  }

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

export default Home;
