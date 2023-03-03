import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
// import charactersSlice from "../../redux/charactersSlice";

const Home = () => {
  const data = useSelector((state) => state.characters);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  console.log(data);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="columns-4 gap-6 p-6">
        {data.people.map((p) => {
          return (
            <div key={p.char_id} className="w-ful mb-6 box-border border-[24px]">
              <img className="w-full" src={p.img} alt={p.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
