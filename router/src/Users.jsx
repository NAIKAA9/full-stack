import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setUser(data);
    };
    fetchData();
    console.log(user);
  }, [id]);
  return (
    <div>
      <p>{id}</p>
      <p>{user.id}</p>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Users;
