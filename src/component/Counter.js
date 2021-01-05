import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const StartCount = (interval) => {
    interval = setInterval(() => setCount((prevcount) => prevcount + 1), 1000);
  };
  return (
    <div className="container">
      <div className="center">
        <div className="title">
          <h1>Đếm</h1>
        </div>
        <div className="result">
          <p>Count: {count}</p>
        </div>
        <div className="btn">
          <button onClick={() => StartCount()}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
