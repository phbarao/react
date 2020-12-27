import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      <h2 className="title">Counter Basic Example</h2>
      <p>{`You clicked ${count} times`}</p>

      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>

      <button onClick={() => setCount(0)}>Zerar</button>

      <Link to="/" className="home">
        Voltar para página inicial
      </Link>
    </div>
  );
}

export default Counter;
