import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";
import Content from "./components/Content";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
