import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import Item from "./Item";

const Quotes = () => {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);

  if (error) {
    return <Error msg={error} />;
  }

  return (
    <div className="p-5">
      {status === "loading" && <Loading />}
      {status === "succeeded" && (
        <div>
          {data.map((q) => <Item key={q.id} item={q}/>)}
        </div>
      )}
    </div>
  );
};

export default Quotes;
