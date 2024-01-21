import { useDispatch, useSelector } from "react-redux";
import {
  updateCartItem,
  removeFromCart,
} from "../appState/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Image, Table } from "react-bootstrap";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { isAuthenticated, userId } = useSelector((state: any) => state.auth);
  const { cartItems = [], totalAmount } = useSelector(
    (state: any) => state.cart.cartItems
  );

  const handleUpdateCart = async (itemId, quantity) => {
    await dispatch(updateCartItem(userId, itemId, quantity));
  };

  const handleRemoveFromCart = async (itemId) => {
    await dispatch(removeFromCart(userId, itemId));
  };

  const handleCheckout = () => {
    isAuthenticated ? navigate("/checkout") : navigate("/login");
  };

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
      <h5 className="text-center mb-4">Your Cart ({cartItems.length} items)</h5>
      <Table bordered responsive>
        <thead>
          <tr>
            <th className="align-middle text-center">Item</th>
            <th className="align-middle text-center">Price</th>
            <th className="align-middle text-center">Quantity</th>
            <th className="align-middle text-center">Total</th>
            <th className="align-middle text-center"> Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.productId}>
              <td className="align-middle text-center">
                <Image
                  style={{ width: "80", height: "80px" }}
                  src={item.image}
                  alt={item.name}
                />
                <div className="mt-2">{item.name}</div>
              </td>
              <td className="align-middle text-center">₹{item.price}</td>
              <td className="align-middle  text-center">
                <div className="d-flex justify-content-center align-items-center">
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
                </div>
              </td>
              <td className="align-middle text-center">
                ₹{item.price * item.quantity}
              </td>
              <td className="align-middle text-center">
                <Button
                  variant="link"
                  className="text-danger"
                  onClick={() => handleRemoveFromCart(item.productId)}
                >
                  {"x"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="mt-4">
        <h5 className="text-center mb-4">Price Details</h5>
        <div className="border p-4">
          <p>
            Price ({cartItems.length} items): ₹{totalAmount}
          </p>
          <p>Discount: ₹0.00</p>
          <p>Delivery Charges: ₹0.00</p>
          <hr />
          <p>Total Price: ₹{totalAmount}</p>
          <Button
            variant="primary"
            onClick={handleCheckout}
            disabled={!isAuthenticated}
            className="mt-3"
          >
            Checkout
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
