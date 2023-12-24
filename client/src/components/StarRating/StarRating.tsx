import React from "react";

const StarRating = ({ rating }: any) => {
  const getStars = () => {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    }

    if (hasHalfStar) {
      stars.push(
        <i key={stars.length} className="fas fa-star-half-alt text-warning"></i>
      );
    }

    const emptyStars = totalStars - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={stars.length + i} className="far fa-star text-warning"></i>
      );
    }

    return stars;
  };

  return <div>{getStars()}</div>;
};

export default StarRating;
