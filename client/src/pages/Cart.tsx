import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCartItems,
  updateCartItem,
  removeFromCart,
} from "../appState/actions/cartActions";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const userId = useSelector((state: any) => state.auth.userId);

  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  
  const { cartItems = [] } = useSelector((state: any) => state.cart.cartItems);

  const requiredCartItemsFields = cartItems?.map((items) => {
    return {
      cartId: items.cartItem._id,
      productId: items.cartItem.productId,
      name: items.productInfo.name,
      price: items.productInfo.price,
      image: items.productInfo.image_url,
      quantity: items.cartItem.quantity,
    };
  });

  console.log("hey cartItems", requiredCartItemsFields);

  useEffect(() => {
    if (cartItems) {
      dispatch(fetchCartItems({ userId }));
    }
  }, [dispatch, cartItems]);

  const handleUpdateCart = async (itemId, quantity) => {
    await dispatch(updateCartItem(userId, itemId, quantity));
    dispatch(fetchCartItems({ userId }));
  };

  const handleRemoveFromCart = async (itemId) => {
    await dispatch(removeFromCart(userId, itemId));
    dispatch(fetchCartItems({ userId }));
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

  const getTotalPrice = () => {
    let total = 0;
    requiredCartItemsFields.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Cart</h2>
          {requiredCartItemsFields.map((item) => (
            <div key={item.productId} className="mb-3 border-bottom pb-3">
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
                        handleUpdateCart(item.productId, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-primary ms-2"
                      onClick={() =>
                        handleUpdateCart(item.productId, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger ms-auto"
                      onClick={() => handleRemoveFromCart(item.productId)}
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
            Price ({requiredCartItemsFields.length} items): ${getTotalPrice()}
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
