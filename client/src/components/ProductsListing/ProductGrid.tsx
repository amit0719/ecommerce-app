import ProductCard from "./ProductCard";
import { appData } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../appState/actions/cartActions";

const ProductGrid = () => {
  const dispatch: any = useDispatch();
  const { products } = useSelector((state: any) => state.products);

  const handleAddToCart = (e, product) => {
    dispatch(
      addToCart({ productId: product._id, userId: "658884487cc83708c78dd385" })
    ); //TODO Remove userID
    //dispatch(fetchAllUsers());
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        {products &&
          products.map((product: any) => (
            <ProductCard
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductGrid;
