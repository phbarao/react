import React, { useState, useEffect, useMemo } from 'react';
import { useCallback } from 'react';

function App() {
  // Armazenar estado de tecnologias
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // Função setTech serve para atualizar os estados
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // Simulando o componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    return () => {};
  }, []);

  // Simulando o componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // tech.length só será executado quando houver alteração no [tech]
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <strong>Você adicionou {techSize} tecnologias</strong>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
