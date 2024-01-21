import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../appState/actions/authActions";
import Brand from "../Brand";
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

  const handleLoginLogout = () => {
    if (isAuthenticated) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <Container fluid className="bg-dark py-4 px-4">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className="text-center ">
          <Brand />
        </div>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ gap: "20px" }}
        >
          <User
            isAuthenticated={isAuthenticated}
            handleLoginLogout={handleLoginLogout}
          />
          <Cart
            isAuthenticated={isAuthenticated}
            totalQuantity={totalQuantity}
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
