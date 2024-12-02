import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { ProductName, StartDate, Image, Price, Category } = product;
  console.log(product);

  if (!product.ProductID) {
    return null;
  }

  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <div className="ag-courses-item_link">
            <div className="ag-courses-item_bg">{}</div>

            <div className="ag-courses-item_title">{ProductName}</div>

            <div className="ag-courses-item_date-box">
              Category: <span className="ag-courses-item_date">{Category}</span>
            </div>

            <div className="ag-courses-item_date-box">
              Price: <span className="ag-courses-item_date">{Price}</span>
            </div>

            {Image && (
              <div className="ag-courses-item_image">
                <img src={Image} alt={ProductName} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
