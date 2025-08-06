import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <h1
        style={{
          color: "red",
          marginTop: "200px",
          marginLeft: "150px",
          fontSize: "100px",
        }}
      >
        Loading ....
      </h1>
    );
  }
  return (
    <div className="product-card">
      {product.map((item) => {
        return (
          <ul key={item.id}>
            <li>
              <img src={item.image} height="200px" width="250px" />
              <h1>{item.title}</h1>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}>
                <button>Details</button>
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default User;
