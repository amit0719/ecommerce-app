import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Badge,
  Col,
  Container,
  Row,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../appState/actions/authActions";

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
          <Link className="nav-link" to={"/"}>
            <h1 className="m-0 text-white">Electro</h1>
          </Link>
        </Col>

        {/* Search component */}
        <Col md={4} className="text-center ">
          {/* Replace this input with your search component */}
          <input type="text" className="form-control" placeholder="Search..." />
        </Col>

        {/* User login */}
        <Col md={2} className="text-center" onClick={handleLoginLogout}>
          <div className="text-white">
            <i className="fas fa-user-circle fa-2x"></i>
            <Link className="text-decoration-none text-reset" to={"login"}>
              <p className="m-0">{isAuthenticated ? "Logout" : "Login"}</p>
            </Link>
          </div>
        </Col>

        {/* Cart */}
        <Col md={2} className="text-center d-flex align-items-center">
          <div className="text-white position-relative">
            <i className="fas fa-shopping-cart fa-2x"></i>
            {isAuthenticated ? (
              <Link className="text-decoration-none text-reset" to={"cart"}>
                <p className="m-0">Your Cart</p>
              </Link>
            ) : (
              <div
                className="text-decoration-none text-reset"
                title={
                  isAuthenticated ? "" : "Please login to view the cart items"
                }
              >
                <p className="m-0">Your Cart</p>
              </div>
            )}
            {/* Cart count badge */}
            <Badge
              pill
              bg="danger"
              className="position-absolute"
              style={{ top: "-8px", right: "-8px" }}
            >
              {totalQuantity}
            </Badge>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
