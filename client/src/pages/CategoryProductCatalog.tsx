import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

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
      <div className="text-center mt-5 px-4">
        <h4 className="mb-4">No products found for {categoryName} category</h4>
        <div className="d-flex flex-column align-items-center">
          <p className="mb-3">
            We're sorry, but it seems that there are no products available in
            the
            {categoryName} category at the moment.
          </p>
          <p className="mb-3">
            You can explore other categories or check back later for updates.
          </p>
        </div>
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
