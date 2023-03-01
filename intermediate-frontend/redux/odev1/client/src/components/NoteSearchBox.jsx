import { useDispatch, useSelector } from "react-redux";
import { changeFilterText } from "../redux/notes/notesSlice";

const NoteSearchBox = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.notes.filterText);

  const handleChange = (e) => {
    dispatch(changeFilterText(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        name="noteFilter"
        id="noteFilter"
        className="placeholder:text-skin-search-placeholder bg-skin-search text-skin-primary 
        my-1 block rounded-md border-gray-300 p-2 text-sm focus:outline-none"
        value={filterText}
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default NoteSearchBox;
