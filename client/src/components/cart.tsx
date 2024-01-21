// Cart.js
import React from "react";
import { Link } from "react-router-dom";
import { Badge, Col } from "react-bootstrap";

const Cart = ({ isAuthenticated, totalQuantity }) => {
  return (
    <Col md={2} className="text-center d-flex align-items-center">
      <div
        className="text-white position-relative"
        title={isAuthenticated ? "" : "Please login to view the cart items"}
      >
        <i className="fas fa-shopping-cart fa-2x"></i>
        {isAuthenticated ? (
          <Link className="text-decoration-none text-reset" to={"cart"}>
            <p className="m-0">Your Cart</p>
          </Link>
        ) : (
          <div className="text-decoration-none text-reset">
            <p className="m-0">Your Cart</p>
          </div>
        )}

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
  );
};

export default Cart;
