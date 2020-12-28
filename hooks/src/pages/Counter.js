import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  function handlechange(e) {
    setNum(e.target.value);
  }

  function handleAdd() {
    setCount(count + parseInt(num));
  }

  function handleSubtract() {
    setCount(count - parseInt(num));
  }

  return (
    <div className="content">
      <h2 className="title">Counter Basic Example</h2>
      <p>{`You clicked ${count} times`}</p>

      <div className="buttons">
        <div className="input-buttons">
          <button onClick={handleSubtract}>-</button>
          <input type="number" value={num} onChange={handlechange} />
          <button onClick={handleAdd}>+</button>
        </div>

        <button className="zero" onClick={() => setCount(0)}>
          Zerar
        </button>
      </div>

      <Link to="/" className="home">
        Voltar para página inicial
      </Link>
    </div>
  );
}

export default Counter;
