import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
    };
    fetchData();
    console.log(user);
  }, []);
  return (
    <div>
      {user.map((usr) => {
        return (
          <ul key={usr.id}>
            <li key={usr.id}></li>
            <Link to={`/user/${usr.id}`}>
              <h2>{usr.name}</h2>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default User;
