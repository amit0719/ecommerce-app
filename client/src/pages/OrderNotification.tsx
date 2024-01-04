import { Container, Card, Button } from "react-bootstrap";

const OrderNotification = () => {
  // Fetch order details from your backend or use props passed from a parent component
  const orderID = "ABC123"; // Replace with dynamic order ID
  const currentStatus = "Shipped"; // Replace with dynamic order status
  const trackingLink = "https://google.com"; // Replace with actual tracking link

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h3>Order Notification</h3>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Order ID:</strong> {orderID}
          </p>
          <p>
            <strong>Current Status:</strong> {currentStatus}
          </p>
          <Button variant="primary" href={trackingLink} target="_blank">
            Track Order
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderNotification;
