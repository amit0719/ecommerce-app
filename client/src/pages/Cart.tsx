import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  updateCartItem,
  removeFromCart,
} from "../appState/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { isAuthenticated, userId } = useSelector((state: any) => state.auth);
  const { cartItems = [], totalAmount } = useSelector(
    (state: any) => state.cart.cartItems
  );

 

  console.log("hey cart", cartItems);

  const handleUpdateCart = async (itemId, quantity) => {
    await dispatch(updateCartItem(userId, itemId, quantity));
    await dispatch(fetchCartItems({ userId }));
  };

  const handleRemoveFromCart = async (itemId) => {
    await dispatch(removeFromCart(userId, itemId));
    await dispatch(fetchCartItems({ userId }));
  };

  const handleCheckout = () => {
    isAuthenticated ? navigate("/checkout") : navigate("/login");
  };

  // const getTotalPrice = () =>
  //   cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        <h5 className="alert-heading">Your Cart is Empty</h5>
        <p>
          Looks like you haven't added any items to your cart yet.
          <br />
          <Link to="/" className="alert-link">
            Browse Products
          </Link>
        </p>
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h3>Cart</h3>
          {cartItems.map((item) => (
            <div key={item.productId} className="mb-4 border rounded p-3">
              <Row>
                <Col md={4}>
                  <Image src={item.image} alt={item.name} fluid />
                </Col>
                <Col md={8}>
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price}</p>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() =>
                        handleUpdateCart(item.productId, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="ms-2"
                      onClick={() =>
                        handleUpdateCart(item.productId, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="ms-auto"
                      onClick={() => handleRemoveFromCart(item.productId)}
                    >
                      Remove
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
        <Col md={6}>
          <h3>Price Details</h3>
          <p>
            Price ({cartItems.length} items): ${totalAmount}
          </p>
          {/* Display discount, delivery charges, etc. */}
          <p>Discount: $0.00</p>
          <p>Delivery Charges: $0.00</p>
          <hr />
          <p>Total Price: ${totalAmount}</p>
          <Button
            variant="primary"
            onClick={handleCheckout}
            disabled={!isAuthenticated}
            className="mt-3"
          >
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
