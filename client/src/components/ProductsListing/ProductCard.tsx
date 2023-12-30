import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";

const ProductCard = ({ product, handleAddToCart }: any) => {
  const {
    category,
    _id: id,
    name,
    price,
    image_url: imageUrl,
    discountedPrice,
    rating = 4,
  } = product;

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
              {discountedPrice ? `$${discountedPrice}` : ""}
              <span className="font-weight-bold" style={{ color: "#D10024" }}>
                ${price}
              </span>
            </p>
          </div>
          <div className="card-footer" style={{ backgroundColor: "#fff" }}>
            <button
              className="btn btn-block"
              style={{ backgroundColor: "#D10024", color: "#fff" }}
              onClick={(e) => handleAddToCart(e, product)}
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
