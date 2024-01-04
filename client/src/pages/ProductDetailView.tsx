import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "../appState/actions/cartActions";
import { useEffect } from "react";
import { fetchProductById } from "../appState/actions/productActions";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductDetailView = () => {
  const dispatch: any = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state: any) => state.products);
  const userId = useSelector((state: any) => state.auth.userId);
  const [storedValue, setStoredValue] = useLocalStorage(userId);

  const { name, image_url: imageUrl, price, description } = product ?? {};

  useEffect(() => {
    if (!product && id) {
      dispatch(fetchProductById(id));
    }
  }, [product, id]);

  console.log("hey storedValue", storedValue);

  const handleAddToCart = async (e) => {
    const cartItem = { productId: id, userId };
    const { cartItems } = storedValue;

    // Check if the product already exists in the local storage cart items
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.productId === id && item.userId === userId
    );

    if (existingCartItemIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1; // Increase quantity
      setStoredValue({ ...storedValue, cartItems: updatedCartItems });
    } else {
      // If the product doesn't exist, add it to the local storage cart items
      const updatedCartItems = [
        ...cartItems,
        { ...cartItem, name, price, image: imageUrl, quantity: 1 },
      ];
      setStoredValue({ ...storedValue, cartItems: updatedCartItems });
    }

    // If user is logged in, also dispatch action to update cart in backend
    if (userId) {
      await dispatch(addToCart(cartItem));
      await dispatch(fetchCartItems({ userId }));
    }
  };

  return (
    <div className="container">
      {id && (
        <div className="row">
          <div className="col-md-6">
            <h1>{name}</h1>
            <img
              src={imageUrl}
              className="img-fluid mb-3"
              alt={`Product: ${name}`}
            />
            <div className="d-flex flex-column align-items-start">
              <p>${price}</p>
              <div
                className="d-flex justify-content-between"
                style={{ width: "100%", gap: "8px" }}
              >
                <button
                  className="btn btn-primary mr-2"
                  onClick={(e) => handleAddToCart(e)}
                  style={{
                    backgroundColor: "#D10024",
                    color: "white",
                    flex: "1",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Product Details</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailView;
