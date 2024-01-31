import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = ({ isAuthenticated, handleLoginLogout }) => {
  return (
    <Col className="text-center" onClick={handleLoginLogout}>
      <div className="text-white">
        <i className="fas fa-user-circle fa-2x"></i>
        <Link
          className="text-decoration-none text-reset"
          to={isAuthenticated ? "/" : "login"}
        >
          <p className="m-0">{isAuthenticated ? "Logout" : "Login"}</p>
        </Link>
      </div>
    </Col>
  );
};

export default User;
