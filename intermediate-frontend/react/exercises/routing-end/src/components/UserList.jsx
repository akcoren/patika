import axios from "axios";
import {useState,useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import Users from "./Users";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));

    return () => {};
  }, []);

  return (
    <>
      <Users />
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default UserList;
