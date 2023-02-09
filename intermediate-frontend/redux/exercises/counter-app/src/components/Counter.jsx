import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const countValue = useSelector((state) => state.counter.value);

  console.log(countValue);

  return (
    <div>
      <h1>{countValue}</h1>
      <button>Decrement</button>
      <button>Increment</button>
    </div>
  );
};

export default Counter;
