import React, { useEffect } from "react";
import { useState } from "react";

const Count = () => {
  let [count, setCounter] = useState(0);
  let [num, setNum] = useState(0);
  const incrementEvent = () => {
    setCounter(count + 1);
  };
  const decrementEvent = () => {
    setNum(num - 1);
  };

  useEffect(() => {
    console.log("Use Effect");
  }, [num, count]);
  return (
    <>
      <div id="result">{count}</div>
      <button onClick={incrementEvent}>+</button>
      <div id="result">{num}</div>
      <button onClick={decrementEvent}>-</button>
    </>
  );
};

export default Count;
