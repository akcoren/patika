import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";

function App() {
    const [name, setName] = useState("Mehmet");
    const [age, setAge] = useState(31);
    const [friends, setFriends] = useState(["Triskes", "Kriskos"]);
    const [address, setAddress] = useState({title: "Sekeristan", zip:313131})

    console.log(name);

    return (
        <div className="App">

            <h1>Hello {name}!</h1>
            <h2>{age}</h2>
            <button
                onClick={() => {
                    setName("Ahmet");
                    setAge(41);
                }}>
                Click
            </button>
            <hr />
            <br />
            <br />
            <h2>Friends</h2>
            {friends.map((friend, key) => {
                return <div key={key}>{friend}</div>;
            })}
            <button
                onClick={() => {
                    setFriends([...friends, "Zurna"]);
                }}>
                Add Zurna
            </button>
            <hr />
            <br />
            <br />
            <h2>Address</h2>
            <div>{address.title} {address.zip} {address.cirrik}</div>
            {/* <button onClick={()=>setAddress({ title: "Tribistan", zip:888888})}>Change Address</button> */}
            <button onClick={()=>setAddress({ ...address, cirrik: "Tribistan", zip:999999})}>Change Address</button>
            {/* can change the value of the key or add new one  */}
            

        </div>
    );
}

export default App;
