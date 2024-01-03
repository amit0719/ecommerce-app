import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../appState/actions/authActions";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { isAuthenticated, userId } = useSelector((state: any) => state.auth);
  const [storedValue] = useLocalStorage(userId);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const count = storedValue?.cartItems?.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    setTotalQuantity(count);
  }, [storedValue]);

  console.log("hey in header", storedValue);

  const handleLoginLogout = async () => {
    if (isAuthenticated) {
      await dispatch(logout());
      navigate("/");
    }
  };

  return (
    <div className="container-fluid bg-dark py-4">
      <div className="row align-items-center">
        {/* Brand name */}
        <div className="col-md-4 text-center text-md-left">
          <Link className="nav-link" to={"/"}>
            <h1 className="m-0 text-white">Electro</h1>
          </Link>
        </div>

        {/* Search component */}
        <div className="col-md-4 text-center">
          {/* Replace this input with your search component */}
          <input type="text" className="form-control" placeholder="Search..." />
        </div>

        {/* User login */}

        <div className="col-md-2 text-center" onClick={handleLoginLogout}>
          <div className="text-white">
            <i className="fas fa-user-circle fa-2x"></i>
            <Link className="text-decoration-none text-reset" to={"login"}>
              <p className="m-0">{isAuthenticated ? "Logout" : "Login"}</p>
            </Link>
          </div>
        </div>

        {/* Cart */}
        <div className="col-md-2 text-center d-flex align-items-center">
          <div className="text-white position-relative">
            <i className="fas fa-shopping-cart fa-2x"></i>
            <Link className="text-decoration-none text-reset" to={"cart"}>
              <p className="m-0">Your Cart</p>
            </Link>
            {/* Cart count badge */}
            <span
              className="badge badge-pill badge-danger position-absolute"
              style={{
                top: "-8px",
                right: "-8px",
                color: "#FFF",
                backgroundColor: "#D10024",
              }}
            >
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
