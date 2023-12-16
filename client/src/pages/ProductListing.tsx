import React from 'react';

const ProductListing = () => {
  // Fetch product data or use dummy data
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    // ...more products
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
