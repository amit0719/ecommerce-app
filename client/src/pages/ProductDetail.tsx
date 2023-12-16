import React from 'react';

const ProductDetail = ({ match }:any) => {
  const productId = match.params.id; // Get product ID from URL params

  // Fetch product details based on productId or use dummy data
  const product = { id: productId, name: 'Product Name', price: '$10', description: 'Product description' };

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        {/* Additional product details, images, etc. */}
      </div>
    </div>
  );
};

export default ProductDetail;
