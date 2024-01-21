import { Link, useNavigate } from "react-router-dom";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../appState/actions/authActions";
import Brand from "../Brand";
import SearchBar from "../SearchBar";
import User from "../User";
import Cart from "../cart";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const { cartItems = [] } = useSelector((state: any) => state.cart.cartItems);
  const totalQuantity = isAuthenticated
    ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  const handleLoginLogout = async () => {
    if (isAuthenticated) {
      await dispatch(logout());
      navigate("/");
    }
  };

  return (
    <Container fluid className="bg-dark py-4">
      <Row className="align-items-center">
        {/* Brand name */}
        <Col md={4} className="text-center text-md-left">
          <Brand />
        </Col>

        <Col md={4} className="text-center">
          <SearchBar />
        </Col>

        <User
          isAuthenticated={isAuthenticated}
          handleLoginLogout={handleLoginLogout}
        />
        <Cart isAuthenticated={isAuthenticated} totalQuantity={totalQuantity} />
      </Row>
    </Container>
  );
};

export default Header;
