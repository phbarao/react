import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Counter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  return (
    <>
      <h1>Counter</h1>

      <strong>{count}</strong>
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <button onClick={() => setCount(0)}>Zerar</button>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <Link to="/">Voltar para Home</Link>
    </>
  );
}

export default Counter;
