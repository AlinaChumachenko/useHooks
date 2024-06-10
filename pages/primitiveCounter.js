import React, { useState } from "react";

function primitiveCounter() {
  const [count, setCount] = useState(0);

  function clickIncrease() {
    setCount(count + 1);
  }

  function clickDecrease() {
    setCount(count - 1);
  }

  return (
    <div className="flex items-center justify-center">
      <span className="text-3xl mr-4">{count}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        onClick={clickIncrease}
      >
        +
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        onClick={clickDecrease}
      >
        -
      </button>
    </div>
  );
}

export default primitiveCounter;
