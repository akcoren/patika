import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacters, clearCharactersState } from "../../redux/charactersSlice";


const Home = () => {
  const data = useSelector((state) => state.characters);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const dispatch = useDispatch();
  let firstLoad = true
  useEffect(() => {
    if (firstLoad) {
      dispatch(fetchCharacters(1))
      firstLoad = false
    }
  }, [dispatch]);

  const handleOnClick = () => {
    dispatch(fetchCharacters(page));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mb-5">
      <div className="columns-4 gap-12 p-6 h-full">
        {data.people.map((p) => {
          return (
            <Link key={p.char_id} to="/">
              <div className="w-full mb-6 box-border border-[24px] bg-slate-200 group">
                <img className="w-full" src={p.img} alt={p.name} />
                <h3 className="p-3 group-hover:underline font-semibold decoration-2">{p.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center h-12">
        {isLoading && <h3 className="p-3 my-2">Loading...</h3>}

        {hasNextPage ? (
          <button
            className="border rounded-md bg-slate-200 cursor-pointer py-2 px-4 border-black"
            onClick={handleOnClick}>
            Load More ({page})
          </button>
        ) : (
          <h3>No more character left.</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
