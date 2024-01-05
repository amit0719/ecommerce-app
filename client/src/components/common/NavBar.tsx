import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { categories } = useSelector((state: any) => state.categories);
  const featuredCategories = categories.filter(({ isFeatured }) => isFeatured);

  return (
    <nav
      className="navbar navbar-expand navbar-light mb-2"
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

        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            {featuredCategories.map((category) => (
              <li className="nav-item px-1" key={category._id}>
                <Link className="nav-link" to={`/category/${category._id}`}>
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
