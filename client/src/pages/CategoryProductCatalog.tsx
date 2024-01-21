import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

const CategoryProductCatalog = () => {
  const { id } = useParams();
  const { categories } = useSelector((state: any) => state.categories);
  const { products } = useSelector((state: any) => state.products);
  const categoryName =
    categories?.find((category: any) => category._id === id)?.name ?? "";

  const productsInCategory =
    products?.filter(
      ({ category }) => category.toLowerCase() === categoryName.toLowerCase()
    ) ?? [];

  if (!productsInCategory.length) {
    return (
      <div className="text-center mt-5">
        <Alert variant="info">
          <Alert.Heading>
            No products found for {categoryName} category.
          </Alert.Heading>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {productsInCategory &&
          productsInCategory.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryProductCatalog;
