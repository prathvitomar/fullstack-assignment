import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, purchaseHistory } from '../../../data/products.csv'; // Mock data

const ShoppingPage = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/');
    } else {
      const userPurchaseCategories = purchaseHistory
        .filter((purchase) => purchase.username === currentUser.username)
        .map((purchase) => purchase.category);

      const notPurchased = products.filter(
        (product) => !userPurchaseCategories.includes(product.category)
      );
      const purchased = products.filter((product) =>
        userPurchaseCategories.includes(product.category)
      );

      setDisplayedProducts([
        ...notPurchased.sort((a, b) => a.ProductName.localeCompare(b.ProductName)),
        ...purchased.sort((a, b) => a.ProductName.localeCompare(b.ProductName)),
      ]);
    }
  }, [navigate]);

  return (
    <div className="shopping-container">
      {displayedProducts.map((product) => (
        <div key={product.ProductID} className="product-card">
          <img src="https://via.placeholder.com/200" alt={product.ProductName} />
          <div className="product-info">
            <h3>{product.ProductName}</h3>
            <p>Category: {product.Category}</p>
            <p className="price">Price: ${product.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingPage;
