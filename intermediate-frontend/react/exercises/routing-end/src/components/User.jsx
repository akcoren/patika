import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((e) => console.log("Error", e))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User</h1>
      {loading && <div>Loading...</div>}
      {!loading && <div> User {JSON.stringify(user)}</div>}
      <div>
        {parseInt(id) < 10 ? (
          <Link to={`/users/${parseInt(id) + 1}`}>Next User {parseInt(id) + 1} </Link>
        ) : (
          <Link to={`/users/${1}`}> Turn Head </Link>
        )}
      </div>
    </div>
  );
};

export default User;
