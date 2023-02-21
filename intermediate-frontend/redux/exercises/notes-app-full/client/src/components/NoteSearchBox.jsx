import { useDispatch, useSelector } from "react-redux";
import { changeFilterText } from "../redux/notes/notesSlice";
import TextInputField from "./TextInputField";

const NoteSearchBox = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.notes.filterText);

  const handleChange = (e) => {
    dispatch(changeFilterText(e.target.value))
  }  

  return (
    <div>
      <TextInputField name="noteFilter" value={filterText} onChange={handleChange} />
    </div>
  );
};

export default NoteSearchBox;
