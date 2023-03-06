import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";
import Navigator from "./components/Navigator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigator />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/char/:char_id",
        element: <Detail />,
      },
      {
        path: "/quotes",
        element: <Quotes />,
      },
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
