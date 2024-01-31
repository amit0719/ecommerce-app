import { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../appState/actions/orderActions";

const OrderNotification = () => {
  const dispatch: any = useDispatch();
  const { orderId } = useSelector((state: any) => state.order);
  const { userId } = useSelector((state: any) => state.auth);
  const { cartItems = [], totalAmount } = useSelector(
    (state: any) => state.cart.cartItems
  );

  useEffect(() => {
    const items = cartItems.map((item) => {
      return {
        productId: item.productId,
        quantity: item.quantity,
      };
    });

    if (!orderId && cartItems.length > 0 && userId) {
      dispatch(createOrder({ userId, items, totalAmount }));
    }
  }, [orderId]);

  if (!orderId) {
    return null;
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h3>Order Notification</h3>
        </Card.Header>
        <Card.Body>
          {orderId ? (
            <>
              <p>Your order has been successfully placed!</p>
              <p>
                <strong>Order ID:</strong> {orderId}
              </p>
              <Button variant="primary" href={`#`} target="_blank">
                Track Order
              </Button>
            </>
          ) : (
            <p>
              Oops! Something went wrong while processing your order. Please try
              again.
            </p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderNotification;
