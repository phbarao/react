import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <h1>Menu:</h1>

      <Link to="/counter">Contador</Link>
      <Link to="/todos">Lembretes</Link>
    </>
  );
}

export default Landing;
