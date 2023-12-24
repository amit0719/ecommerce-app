import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Mock data for categories (replace with actual data fetching)
  const [categories, setCategories] = useState([
    { id: 1, name: "Home" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Smartphones" },
    { id: 3, name: "Cameras" },
    { id: 3, name: "Accessories" },
    // Add more categories as needed
  ]);

  // Simulate fetching categories from the backend
  useEffect(() => {
    // Fetch categories from the backend API and setCategories(responseData)
    // Example using setTimeout to simulate an API call
    const timeout = setTimeout(() => {
      // Replace this with your actual API call to fetch categories
      setCategories(categories); // Set the fetched categories here
    }, 1000); // Simulating a 1-second delay for API response

    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light mb-2"
      style={{
        background: "#FFF",
        borderBottom: "2px solid #E4E7ED",
        borderTop: "3px solid #D10024",
      }}
    >
      <div className="container">
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <Link className="nav-link" to={`/category/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
