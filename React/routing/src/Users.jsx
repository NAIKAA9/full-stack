import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>{data.id}</p>
      <img src={data.image} alt="" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default Users;
