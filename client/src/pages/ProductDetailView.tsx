import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../appState/actions/cartActions";
import { useEffect } from "react";
import { fetchProductById } from "../appState/actions/productActions";

const ProductDetailView = () => {
  const dispatch: any = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state: any) => state.products);
  const userId = useSelector((state: any) => state.auth.userId);
  const discountPrice = 0;

  const {
    name,
    image_url: imageUrl,
    price,
    description,
    reviewsCount,
  } = product ?? {};

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const handleAddToCart = (e) => {
    dispatch(addToCart({ productId: id, userId }));
    e.preventDefault();
  };

  const handleCheckout = () => {
    // Logic to proceed to checkout
  };

  return (
    <div className="container">
      {id && (
        <div className="row">
          <div className="col-md-6">
            <h1>{name}</h1>
            {/* Product image */}
            <img
              src={imageUrl}
              className="img-fluid mb-3"
              alt={`Product: ${name}`}
            />
            {/* Price, rating, and buttons */}
            <div className="d-flex flex-column align-items-start">
              {discountPrice && (
                <p>
                  <span>Special price:</span>
                  <span>
                    ${discountPrice} (
                    {Math.round(((price - discountPrice) / price) * 100)}% off)
                  </span>
                </p>
              )}
              {discountPrice && (
                <p>
                  <del>${price}</del>
                </p>
              )}

              <div
                className="d-flex justify-content-between"
                style={{ width: "100%", gap: "8px" }}
              >
                <button
                  className="btn btn-primary mr-2"
                  onClick={(e) => handleAddToCart(e)}
                  style={{
                    backgroundColor: "#D10024",
                    color: "white",
                    flex: "1",
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-success"
                  onClick={handleCheckout}
                  style={{ flex: "1" }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Product Details</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailView;
