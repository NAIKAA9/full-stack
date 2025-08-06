import React from "react";

function Product({ data }) {
  return (
    <div>
      <h1>
        {data.name} and {data.price}
      </h1>
    </div>
  );
}

export default Product;
