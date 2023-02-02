import { useState } from "react";
import Counter from "./components/Counter";

function App() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="App">
            {isVisible && <Counter />}
            <button
                onClick={(e) => {
                    setIsVisible(!isVisible);
                    console.log(e);
                }}>
                Toggle
            </button>
        </div>
    );
}

export default App;
