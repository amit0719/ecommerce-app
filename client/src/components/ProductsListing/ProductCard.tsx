import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";

const ProductCard = ({ product }: any) => {
  const {
    category,
    id,
    name,
    price,
    imageUrl,
    discountPrice = 5,
    rating = 4,
  } = product;

  console.log("hey prooduct", product);
  return (
    <div className="col-md-4 mb-4">
      <Link
        to={`/product/${id}`}
        className="card text-center mx-auto"
        style={{ maxWidth: "18rem", textDecoration: "none" }}
      >
        <div>
          <img src={imageUrl} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text" style={{ color: "#8D99AE" }}>
              {category}
            </p>
            <div className="mb-3">
              <StarRating rating={rating} />
            </div>
            <p className="card-text" style={{ color: "#8D99AE" }}>
              {discountPrice ? `$${discountPrice}` : ""}
              <span className="font-weight-bold" style={{ color: "#D10024" }}>
                ${price}
              </span>
            </p>
          </div>
          <div className="card-footer" style={{ backgroundColor: "#fff" }}>
            <button
              className="btn btn-block"
              style={{ backgroundColor: "#D10024", color: "#fff" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
