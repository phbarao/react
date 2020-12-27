import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';

function Landing() {
  return (
    <div className="content">
      <h2 className="title">Apps</h2>

      <Link to="/counter">Counter</Link>
      <Link to="/todos">Lembretes</Link>
    </div>
  );
}

export default Landing;
