import React from "react";
import { Link } from "react-router-dom";

function One() {
  return (
    <div className="container">
      <h1>One</h1>

      <Link to="/">Voltar</Link>
    </div>
  );
}

export default One;
