import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
        // setCount(1);
    }

    const decrease = () => {
        setCount(count - 1);
    }


    return (
        <div>
            <h1>Counter {count}</h1>
            <br />
            <button onClick={increase}>Increase</button>
            <br />
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};

export default Counter;
