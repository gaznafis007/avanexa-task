import React from "react";

const ProductsCard = ({ product }) => {
  const {
    product_name,
    product_subtitle,
    product_price,
    product_color_code,
    product_color,
    dt,
    product_category_name,
    product_model_name,
    product_brand_name,
  } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>
          Subtitle: <span className="font-semibold">{product_subtitle}</span>
        </p>
        <p>Category: {product_category_name}</p>
        <p>Brand: {product_brand_name}</p>
        <p>
          color:{product_color} ({product_color_code})
        </p>
        <p>Model: {product_model_name}</p>
        <p>Date: {dt.split(" ")[0]}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Price: {product_price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
