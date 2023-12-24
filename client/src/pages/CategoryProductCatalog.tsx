import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductsListing/ProductCard";
import { appData } from "../data";
import Pagination from "../components/common/Pagination";

const CategoryProductCatalog = () => {
  //   const { categoryName } = useParams();
  //   const [products, setProducts] = useState([]); // Assuming products data state
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [productsPerPage] = useState(6); // Products per page

  //   // Simulated fetch function to get products based on category
  //   const fetchProductsByCategory = (category) => {
  //     // Replace this with your actual fetch logic based on category
  //     // Fetch products related to the specified category
  //     // Example: API call to retrieve products for the given category
  //     const fetchedProducts = []; // Fetch your products
  //     setProducts(fetchedProducts);
  //   };

  //   useEffect(() => {
  //     fetchProductsByCategory(categoryName);
  //   }, [categoryName]);

  //Pagination;
  const products = appData.products;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const { name } = appData.categories[0];

  return (
    <div className="container">
      <h1>{name}</h1>
      <div className="row">
        {currentProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        itemsPerPage={productsPerPage}
        totalItems={products.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default CategoryProductCatalog;
