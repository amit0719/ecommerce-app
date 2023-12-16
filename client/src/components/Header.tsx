import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link to="/" className="navbar-brand text-white">
          <img src="path_to_your_logo_image" alt="Logo" height="40" />
        </Link>
        
        {/* Search Field */}
        <form className="d-flex flex-grow-1 mx-3">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>

        {/* User Profile Icon */}
        <Link to="/profile" className="btn btn-outline-light me-2">
          <i className="bi bi-person-fill me-1"></i>Profile
        </Link>

        {/* Cart Icon */}
        <Link to="/cart" className="btn btn-outline-light">
          <i className="bi bi-cart-fill me-1"></i>Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
