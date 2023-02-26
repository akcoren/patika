import { Menu } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/notes/notesSlice";

export default function Example() {
  const activeTheme = useSelector((state) => state.notes.theme);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    // console.log(e.target.value);
    // console.log("drowdown clicked");
    dispatch(changeTheme(e.target.value));
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="w-full justify-center rounded-md border border-skin-primary
             bg-skin-menu-button px-4 py-2 text-sm font-medium text-skin-menu-button 
             hover:bg-skin-menu-button-hover hover:text-skin-menu-button-hover">
            Options
          </Menu.Button>
        </div>

        <Menu.Items
          className="absolute right-0 mt-2 w-32 origin-top-right 
        rounded-md border border-skin-primary bg-skin-primary 
        shadow-lg shadow-skin-primary">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  value="theme-light"
                  onClick={handleClick}
                  className={`${
                    active
                      ? "bg-skin-menu-button-hover text-skin-menu-button-hover"
                      : "bg-skin-menu-button text-skin-menu-button"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                  Light Theme
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  value="theme-dark"
                  onClick={handleClick}
                  className={`${
                    active
                      ? "bg-skin-menu-button-hover text-skin-menu-button-hover"
                      : "bg-skin-menu-button text-skin-menu-button"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                  Dark Theme
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  value="theme-zurna"
                  onClick={handleClick}
                  className={`${
                    active
                      ? "bg-skin-menu-button-hover text-skin-menu-button-hover"
                      : "bg-skin-menu-button text-skin-menu-button"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                  Zurna Theme
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
