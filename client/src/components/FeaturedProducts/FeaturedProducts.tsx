import React from "react";

const FeaturedProducts = ({ products }: any) => {
  return (
    <div className="container mt-4">
      <h2>Featured Products</h2>
      <div className="row">
        {products.map((product: any) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                {/* Add buttons, links, or details here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
