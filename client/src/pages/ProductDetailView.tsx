import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "../appState/actions/cartActions";
import { useEffect } from "react";
import { fetchProductById } from "../appState/actions/productActions";

const ProductDetailView = () => {
  const dispatch: any = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state: any) => state.products);
  const { isAuthenticated, userId } = useSelector((state: any) => state.auth);
  const { name, image_url: imageUrl, price, description } = product ?? {};

  useEffect(() => {
    if (!product && id) {
      dispatch(fetchProductById(id));
    }
  }, [product, id]);

  const handleAddToCart = async () => {
    if (userId) {
      await dispatch(addToCart({ productId: id, userId }));
      await dispatch(fetchCartItems({ userId }));
    }
  };

  return (
    <Container className="mt-4">
      {id && (
        <Row>
          <Col md={6} className="border-end">
            <img
              src={imageUrl}
              className="img-fluid"
              alt={`Product: ${name}`}
            />
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{description}</p>
              </div>

              <div>
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  disabled={!isAuthenticated}
                  style={{ backgroundColor: "#D10024" }}
                  title={
                    isAuthenticated ? "" : "Please login to add items to cart"
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetailView;
