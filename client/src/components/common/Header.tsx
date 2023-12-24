import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-dark py-4">
      <div className="row align-items-center">
        {/* Brand name */}
        <div className="col-md-4 text-center text-md-left">
          <h1 className="m-0 text-white">Electro</h1>
        </div>

        {/* Search component */}
        <div className="col-md-4 text-center">
          {/* Replace this input with your search component */}
          <input type="text" className="form-control" placeholder="Search..." />
        </div>

        {/* User login */}

        <div className="col-md-2 text-center">
          <div className="text-white">
            <i className="fas fa-user-circle fa-2x"></i>
            <Link to={"login"}>
              <p className="m-0">Login</p>
            </Link>
          </div>
        </div>

        {/* Cart */}
        <div className="col-md-2 text-center d-flex align-items-center">
          <div className="text-white position-relative">
            <i className="fas fa-shopping-cart fa-2x"></i>
            <p className="m-0">Your Cart</p>
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
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
