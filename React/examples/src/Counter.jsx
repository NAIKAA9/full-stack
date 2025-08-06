import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);

    console.log(count);
  };

  return (
    <React.Fragment>
      <button onClick={increment}>+</button>
      <div id="result">{count}</div>
      <button onClick={decrement}>+</button>
    </React.Fragment>
  );
};

export default Counter;
