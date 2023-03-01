import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { destroyNote, changeNote } from "../redux/notes/notesSlice";
import { Dialog } from "@headlessui/react";
import { noteColors } from "../constants";
import ColorPicker from "./ColorPicker";
import { TrashIcon } from "@heroicons/react/24/outline";

const Note = ({ id, title, body, color }) => {
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    dispatch(destroyNote(id));
  };

  const [modalTitle, setModalTitle] = useState(title);
  const [modalBody, setModalBody] = useState(body);
  const [modalColor, setModalColor] = useState(color);
  const [isOpen, setIsOpen] = useState(false);

  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resizeTextArea, [modalBody, isOpen]);

  const closeModal = () => {
    dispatch(
      changeNote({
        id: id,
        title: modalTitle,
        body: modalBody,
        color: modalColor,
      })
    );
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleTitleChange = (e) => {
    setModalTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setModalBody(e.target.value);
  };

  // you should not create this kind of tailwindcc class
  // let bgColor = "bg-[" + color + "]" + "flex min-w-[330px] max-w-[330px] flex-col rounded-md border p-2";

  return (
    <div
      className={`${noteColors[color]} group flex 
      min-w-[330px] flex-col justify-start rounded-md border p-2
      text-skin-primary hover:border-skin-primary hover:shadow-lg hover:shadow-skin-primary`}
      onClick={openModal}>
      <div className="flex items-center justify-between px-1">
        <p className={`break-all rounded px-2 line-clamp-2`}>{title}</p>
        <div
          className="invisible mt-1 flex h-7 w-7 
          shrink-0 items-center justify-center
          rounded-md border border-skin-weak bg-skin-button/40 py-1
          text-skin-primary 
          hover:border-skin-primary 
          hover:bg-skin-button-inverted/20
          hover:text-skin-inverted
          group-hover:visible">
          <TrashIcon className="h-5 w-5" onClick={() => handleDestroy(id)} type="button" />
        </div>
      </div>
      <p
        className={`${noteColors[color]}
        mt-0 mb-2 break-all rounded px-2 pt-1 text-sm line-clamp-4`}>
        {body}
      </p>

      <Dialog
        as="div"
        className="relative inset-0 z-10 overflow-y-auto font-mono "
        onClose={closeModal}
        open={isOpen}>
        <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-40">
          <div className="flex min-h-full items-center justify-center p-0 text-center">
            <Dialog.Panel
              className={`min-w-[30vw]  max-w-md overflow-hidden
              rounded-md border-[1px] border-skin-inverted p-0 
              text-left align-middle shadow-md shadow-skin-primary
              ${noteColors[modalColor]}`}>
              <div className="flex flex-grow flex-col items-stretch">
                <input
                  type="text"
                  name="modalTitle"
                  id="modalTitle"
                  className={`text-md block w-full overflow-hidden border-b-[1px] 
                  border-b-skin-seperator p-3 placeholder:text-skin-placeholder
                  focus:outline-none ${noteColors[modalColor]}`}
                  value={modalTitle}
                  onChange={handleTitleChange}
                  placeholder="Title"
                />
                <textarea
                  type="text"
                  name="modalBody"
                  id="modalBody"
                  ref={textAreaRef}
                  className={`max-h-[70vh] min-h-[40vh] w-full resize-none px-3 pt-2 
                  pb-4 text-sm placeholder:text-skin-placeholder
                  focus:outline-none ${noteColors[modalColor]}`}
                  value={modalBody}
                  onChange={handleBodyChange}
                  placeholder="What's on your mind?"
                />

                <div className="my-1 flex items-center justify-between border-t-[1px] border-skin-seperator">
                  <ColorPicker color={modalColor} setColor={setModalColor} size={4} />
                  <div
                    className="flex h-7 w-7 
                    shrink-0 items-center justify-center
                    rounded-md border border-skin-weak bg-skin-button/40 py-1
                    text-skin-primary 
                    hover:border-skin-primary 
                    hover:bg-skin-button-inverted/20
                    hover:text-skin-inverted m-2">
                    <TrashIcon
                      className="h-5 w-5"
                      onClick={() => handleDestroy(id)}
                      type="button"
                    />
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Note;
