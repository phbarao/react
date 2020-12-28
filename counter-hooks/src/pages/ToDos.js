import React, { useState } from 'react';

function Counter() {
  const [todo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  function handleChange(e) {
    setNewToDo(e.target.value);
  }

  function handleAdd() {
    setToDo([...todo, newToDo]);
    setNewToDo('');
  }

  function handleClear() {
    setToDo([]);
  }

  return (
    <>
      <h1>Lembretes</h1>
      <input type="text" value={newToDo} onChange={handleChange} />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleClear}>CLEAR</button>

      <ul>
        {todo.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default Counter;
