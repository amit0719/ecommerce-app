import { useParams } from "react-router-dom";
import { appData } from "../data";
import StarRating from "../components/StarRating/StarRating";

const ProductDetailView = () => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  // const [product, setProduct] = useState(appData.products[0]);

  const {
    name,
    imageUrl,
    price,
    discountPrice,
    description,
    details = [],
    averageRating,
    reviewsCount,
  } = appData.products[0];

  // // Simulated fetch function to get product details based on ID
  // const fetchProduct = (id) => {
  //   // Replace this with your actual fetch logic
  //   const fetchedProduct = {
  //     id: id,
  //     name: "Sample Product",
  //     mainImage: "main-image-url.jpg",
  //     additionalImages: ["image-url1.jpg", "image-url2.jpg", "image-url3.jpg"],
  //     price: 50,
  //     discountPrice: 45,
  //     description: "Product description",
  //     details: ["Detail 1", "Detail 2", "Detail 3"],
  //     averageRating: 4.5,
  //     reviewsCount: 20,
  //     recommendedProducts: [], // Assuming an empty array for recommended products
  //   };
  //   setProduct(fetchedProduct);
  // };

  // useEffect(() => {
  //   fetchProduct(productId); // Fetch product details when the component mounts
  // }, [productId]);

  const handleAddToCart = () => {
    // Logic to add the item to the cart
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
              <div className="mb-3">
                <StarRating rating={averageRating} />
                <span> ({reviewsCount} Ratings)</span>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ width: "100%", gap: "8px" }}
              >
                <button
                  className="btn btn-primary mr-2"
                  onClick={handleAddToCart}
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
            {/* Detailed product information */}
            <h2>Product Details</h2>
            <p>{description}</p>
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailView;
