import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(1);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleAdd() {
    setCounter(counter + parseInt(num));
  }

  function handleSubtract() {
    setCounter(counter - parseInt(num));
  }

  return (
    <>
      <h1>{`Counter: ${counter}`}</h1>
      <button onClick={handleSubtract}>-</button>
      <input type="number" value={num} onChange={handleChange} />
      <button onClick={handleAdd}>+</button>
    </>
  );
}

export default Counter;
