import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";
import Content from "./components/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Content />
        <Link to="/" className="font-extrabold">Home</Link>
        <Link to="about" className="font-extrabold">About Us</Link>
        <Link to="users" className="font-extrabold">Users</Link>
        <Outlet />
      </div>
    ),
    children:[
      {
        path: "users",
        element: <div>Users</div>,
      },
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
