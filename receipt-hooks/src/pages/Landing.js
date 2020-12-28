import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <h1>Início</h1>
      <Link to="/counter">Counter</Link>
      <Link to="/changename">Change Name</Link>
      <Link to="/receipt">Gerar Recibo</Link>
    </>
  );
}

export default Landing;
