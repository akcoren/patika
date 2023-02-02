import { useState, useEffect } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("component is just mounted");

        const countInInterval = setInterval(() => {
            // setNumber(number + 1)
            setNumber((n) => n + 1); // same as above
        }, 1000);

        // things to do when unmounting
        return () => { 
            clearInterval(countInInterval); // should kill the state update
        };
    }, []); // if second input array is empty it is the mounting effect,

    // https://reactjs.org/docs/hooks-effect.html
    // https://beta.reactjs.org/reference/react/useEffect

    useEffect(() => {
        console.log("state is updated");
    }, [number]);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    );
};

export default Counter;
