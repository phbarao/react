import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <h1>Menu</h1>

      <div className="links">
        <Link to="/one">One</Link>
        <Link to="/two">Two</Link>
      </div>
    </div>
  );
}

export default Landing;
