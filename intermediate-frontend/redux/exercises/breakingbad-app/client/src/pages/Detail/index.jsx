import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const Detail = () => {
  const [char, setChar] = useState({});

  const [loading, setLoading] = useState(true);

  const { char_id } = useParams();

  console.log(`${import.meta.env.VITE_API_BASE_ENDPOINT}/characters/${char_id}`);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div>
      {loading && <Loading />}

      {char && (
        <div>
          <h1 className="text-2xl">{char.name}</h1>
          <img src={char.img} alt={char.name} className="w-1/2" />
        </div>
      )}
      {char && (
        <pre>
          {JSON.stringify(char,null,2)}
        </pre>
      )}
    </div>
  );
};

export default Detail;
