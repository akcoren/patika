import { Link, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import Wildcard from "./components/Wildcard";
import Navigation from "./components/Navigation";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserList />}>
          <Route index element={<Users />}/>
          <Route path=":id" element={<User />} />
        </Route>
        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="*" element={<Wildcard />} />
      </Routes>
    </>
  );
}

export default App;
