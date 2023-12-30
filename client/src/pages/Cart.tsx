import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCartItems,
  updateCartItem,
  removeFromCart,
} from "../appState/actions/cartActions";
import { useNavigate } from "react-router-dom";
import proImage from "../assets/images/laptopImg.jpg";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = true;
  //  useSelector(
  //   (state: any) => state.auth.isAuthenticated
  // );
  //const cartItems = useSelector((state: any) => state.cart.cartItems);

  useEffect(() => {
    // dispatch(fetchCartItems());
  }, [dispatch]);

  const handleUpdateCart = (itemId, quantity) => {
    // dispatch(updateCartItem(itemId, quantity));
  };

  const handleRemoveFromCart = (itemId) => {
    // dispatch(removeFromCart(itemId));
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      // Redirect to the checkout page if authenticated
      navigate("/checkout");
    } else {
      // Redirect to the login page or show a message for authentication
      navigate("/login");
    }
  };

  const cartItems = [
    {
      id: 1,
      name: "T-shirt",
      price: 9.99,
      quantity: 1,
      image: proImage,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 399.99,
      quantity: 2,
      image: proImage,
    },
  ];

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-3 border-bottom pb-3">
              <div className="row">
                <div className="col-md-4">
                  <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() =>
                        handleUpdateCart(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-primary ms-2"
                      onClick={() =>
                        handleUpdateCart(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger ms-auto"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <h2>Price Details</h2>
          <p>
            Price ({cartItems.length} items): ${getTotalPrice()}
          </p>
          {/* Display discount, delivery charges, etc. */}
          <p>Discount: $0.00</p>
          <p>Delivery Charges: $0.00</p>
          <hr />
          <p>Total Price: ${getTotalPrice()}</p>
          <button
            className="btn btn-primary"
            onClick={handleCheckout}
            disabled={!isAuthenticated}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
