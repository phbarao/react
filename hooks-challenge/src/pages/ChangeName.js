import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChangeName() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  return (
    <>
      <h1>Changing Strings</h1>

      <p>
        Name: <strong>{name}</strong>
      </p>

      <p>
        Color: <strong>{color}</strong>
      </p>

      <button onClick={() => setName('Pedro')}>'Pedro'</button>
      <button onClick={() => setColor('Blue')}>Azul</button>

      <Link to="/">Voltar para Home</Link>
    </>
  );
}

export default ChangeName;
