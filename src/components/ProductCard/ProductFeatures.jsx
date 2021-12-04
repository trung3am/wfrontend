import React from "react";
import {
  LocalShipping,
  International,

  
} from "../UI/Icons/Icons";

const ProductFeatures = (props) => {
  return (
    <React.Fragment>

      
      {props.product.shipped_from_abroad ? (
        <span
          className="shop-card-product-features"
          title="International Shipping"
        >
          <International />
          {props.showText ? (
            <span className="feature-text">Hàng Xuất Khẩu</span> // Shipped From Abroad
          ) : null}
        </span>
      ) : (
        <span className="shop-card-product-features" title="Local Shipping">
          <LocalShipping />
          {props.showText ? (
            <span className="feature-text">Hàng Nội Địa</span> // Local Shippping
          ) : null}
        </span>
      )}
    </React.Fragment>
  );
};

export default ProductFeatures;
