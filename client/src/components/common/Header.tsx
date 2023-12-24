
import { Link } from 'react-router-dom';

const Header = () => {
  // Dummy data for the cart count
  const cartItemCount = 5; // Replace with your actual count from cart data

  return (
    <header>
      {/* First section */}
      <div className="bg-light py-2">
        <div className="container d-flex justify-content-between align-items-center">
          {/* App name */}
          <h1 className="mb-0">Your App Name</h1>

          {/* Search bar */}
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          {/* Login button */}
          <Link to="/login" className="btn btn-primary ml-2">
            Login
          </Link>

          {/* Cart icon with count */}
          <Link to="/cart" className="btn btn-light ml-2">
            <i className="fas fa-shopping-cart"></i> Cart{' '}
            <span className="badge badge-danger">{cartItemCount}</span>
          </Link>
        </div>
      </div>

      {/* Second section - Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Navbar brand */}
          <Link className="navbar-brand" to="/">E-commerce</Link>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* Add your category links */}
              <li className="nav-item">
                <Link className="nav-link" to="/category1">Category 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category2">Category 2</Link>
              </li>
              {/* Add more category links */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
