import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import Garbage from "./components/Garbage";

function App() {
    const firstName = "Ahmet";
    const secondName = "Murat";
    const isActive = true;

    // return React.createElement("div",null,"Hello")
    return (
        <>
            <Header />
            {/* <Garbage/> */}
            <User name="Mehmet" />
        </>
    );
}

export default App;
