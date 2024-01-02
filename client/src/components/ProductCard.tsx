import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const {
    category,
    _id: id,
    name,
    price,
    image_url: imageUrl,
    discountedPrice,
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

            <p className="card-text" style={{ color: "#8D99AE" }}>
              {discountedPrice ? `$${discountedPrice}` : ""}
              <span className="font-weight-bold" style={{ color: "#D10024" }}>
                ${price}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
