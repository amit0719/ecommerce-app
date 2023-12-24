import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const { category, name, price, image } = product;
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={name} />

        <div className="card-body">
          <h5 className="card-title">{category}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
          <p className="card-text">Price: ${price}</p>
        </div>

        <div className="card-footer">
          <Link to="#" className="btn btn-primary btn-sm mr-2">
            View Details
          </Link>
          {/* Add other buttons or actions */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
