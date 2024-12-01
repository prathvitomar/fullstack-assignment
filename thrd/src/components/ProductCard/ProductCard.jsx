import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src="https://via.placeholder.com/200" // Replace with dynamic image if available
        alt={product.ProductName}
      />
      <div className="product-info">
        <h3>{product.ProductName}</h3>
        <p>Category: {product.Category}</p>
        <p className="price">Price: ${product.Price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
