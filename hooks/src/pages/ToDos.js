import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/counter.css';

function Counter() {
  const [todo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  const handleAdd = useCallback(() => {
    setToDo([...todo, newToDo]);
    setNewToDo('');
  }, [newToDo, todo]);

  useEffect(() => {
    const storageToDo = localStorage.getItem('todo');

    if (storageToDo) {
      setToDo(JSON.parse(storageToDo));
    }

    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const todoSize = useMemo(() => todo.length, [todo]);

  return (
    <div className="content">
      <h2 className="title">Lembretes</h2>

      <span className="title">
        Você tem <strong>{todoSize}</strong> lembretes.
      </span>

      <form className="form">
        <input value={newToDo} onChange={(e) => setNewToDo(e.target.value)} />

        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>

      <ul>
        {todo.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <Link to="/" className="home">
        Voltar para página inicial
      </Link>
    </div>
  );
}

export default Counter;
