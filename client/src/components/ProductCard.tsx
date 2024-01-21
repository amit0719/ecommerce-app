import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

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
    <Col sd={4} className="mb-4">
      <Link to={`/product/${id}`} className="text-decoration-none">
        <Card className="text-center h-100">
          <div className="card-img-container">
            <Card.Img
              variant="top"
              src={imageUrl}
              alt={name}
              className="card-img"
            />
          </div>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{name}</Card.Title>
            <Card.Text style={{ color: "#8D99AE" }}>{category}</Card.Text>
            <Card.Text style={{ color: "#8D99AE", flex: "1 0 auto" }}>
              {discountedPrice ? `₹${Math.round(discountedPrice)}` : ""}
              <span className="font-weight-bold" style={{ color: "#D10024" }}>
                {discountedPrice ? <del>{price}</del> : price}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
