import React from "react";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a className="logo" href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a className="logo" href={`/product/${product._id}`}>
          <h2 className="nike">{product.name}</h2>
              </a>
              <Rating rating={product.rating} numReviews={product.numReviews}/>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
