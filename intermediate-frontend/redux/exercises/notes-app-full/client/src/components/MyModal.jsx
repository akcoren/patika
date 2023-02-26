import { Dialog } from "@headlessui/react";
import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeNote } from "../redux/notes/notesSlice";

export default function MyModal({ title, body, id, color }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(title);
  const [modalBody, setModalBody] = useState(body);

  const textAreaRef = useRef(null);

  const dispatch = useDispatch();

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resizeTextArea, [modalBody, isOpen]);

  const closeModal = () => {
    console.log("Modal Closing!");
    dispatch(
      changeNote({
        id: id,
        title: modalTitle,
        body: modalBody,
        color: color,
      })
    );
    setIsOpen(false);
  };

  const openModal = () => {
    console.log("Modal Opening!");
    setIsOpen(true);
  };

  const handleTitleChange = (e) => {
    setModalTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setModalBody(e.target.value);
  };

  const noteColors = [
    "bg-skin-primary",
    "bg-skin-note-01",
    "bg-skin-note-02",
    "bg-skin-note-03",
    "bg-skin-note-04",
    "bg-skin-note-05",
    "bg-skin-note-06",
    "bg-skin-note-07",
    "bg-skin-note-08",
    "bg-skin-note-09",
    "bg-skin-note-10",
    "bg-skin-note-11",
  ];

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Open dialog
        </button>
      </div>

      <Dialog
        as="div"
        className="relative inset-0 z-10 overflow-y-auto "
        onClose={closeModal}
        open={isOpen}>
        <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-40">
          <div className="flex min-h-full items-center justify-center p-0 text-center">
            <Dialog.Panel
              className={` min-h-[70vh]  min-w-[50vw]  max-w-md overflow-hidden
              rounded-md border-2 border-skin-primary p-0
              text-left align-middle shadow-md shadow-skin-primary
              ${noteColors[color]}`}>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="modalTitle"
                  id="modalTitle"
                  className={`text-md block w-full overflow-hidden border-b-2 border-b-skin-seperator p-3 placeholder:text-skin-placeholder focus:outline-none`}
                  value={modalTitle}
                  onChange={handleTitleChange}
                  placeholder="Title"
                />
                <textarea
                  rows={3}
                  type="text"
                  name="modalBody"
                  id="modalBody"
                  ref={textAreaRef}
                  className={`w-full grow px-3 pt-3 pb-0 text-sm placeholder:text-skin-placeholder focus:outline-none`}
                  value={modalBody}
                  onChange={handleBodyChange}
                  placeholder="What's on your mind?"
                />

                <div className="mt-4 self-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}>
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
