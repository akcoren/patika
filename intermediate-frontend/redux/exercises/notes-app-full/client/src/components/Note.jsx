import { stringify } from "postcss";
import React from "react";
import { useDispatch } from "react-redux";
import { destroyNote } from "../redux/notes/notesSlice";
import GenericButton from "./GenericButton";

const Note = ({ id, title, body, color }) => {
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    dispatch(destroyNote(id));
  };

  // let bgColor = `bg-[#ff0000]`
  // let bgColor = `bg-[${color}]`

  const color1 = JSON.parse(JSON.stringify(color))
  console.log(color);

  const yes = color
  // you should not create this king of tailwind class
  // let bgColor = "bg-[" + color + "]" + "flex min-w-[330px] max-w-[330px] flex-col rounded-md border p-2";

  return (
    <div className={`flex min-w-[330px] max-w-[330px] flex-col rounded-md border p-2`}>
      <p className="overflow-hidden break-words rounded bg-slate-300 p-1 text-skin-primary">{title}</p>
      <p className="my-1 flex-grow break-words rounded bg-slate-400 p-1 text-skin-primary">{body}</p>
      <div className="flex items-center justify-between bg-skin-primary">
        <p>{color}</p>
        <GenericButton
          className=""
          type="button"
          onClick={() => handleDestroy(id)}
          buttonText="Delete"
        />
      </div>
    </div>
  );
};

export default Note;
