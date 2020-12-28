import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo.png';

import '../styles/pages/receipt.css';

function Receipt() {
  const [dentist, setDentist] = useState('__________');
  const [description, setDescription] = useState(
    'Serviços de prótese dentária'
  );
  const [price, setPrice] = useState(0);

  return (
    <div className="container">
      <div className="receipt-preview">
        <header className="receipt-header center">
          <img src={logoImg} alt="Pedro Prótese Dentária" className="logo" />

          <div className="light-text">
            <h3>(TPD 412)</h3>
            <p>Rua Francisco Ribas, 1198. Ponta Grossa-PR</p>
            <span className="boost">(42) 3025-4014 / (42) 99860-1968</span>
          </div>
        </header>

        <main>
          <div className="top-left center">
            <strong className="main-title">Recibo:</strong>

            <p className="light-text">
              Recebemos de: <span className="boost">{dentist}</span> os valores
              descritos abaixo:
            </p>

            <table className="items center">
              <thead>
                <th>Descrição</th>
                <th>valor</th>
              </thead>

              <tbody>
                <td>{description}</td>
                <td>{`R$ ${price},00`}</td>
              </tbody>
            </table>
          </div>
        </main>

        <footer className="footer center">
          <div className="footer-left">
            <h3>Recebido por: </h3>
            <p>Manoel Pedro da Silva Nunes</p>
            <small>450.627.069-04</small>
          </div>
          <div className="footer-right">
            <span className="boost">Total:</span>
            <h3>R$ {price},00</h3>
          </div>
        </footer>
      </div>

      <form className="form center">
        <input
          type="text"
          // value={title}
          placeholder="Nome do Dentista ou Clínica"
          required
          onChange={(e) => setDentist(e.target.value)}
        />

        <input
          type="text"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          // value={price}
          placeholder="Valor"
          required
          onChange={(e) => setPrice(e.target.value)}
        />

        <button>Finalizar Recibo</button>
        <Link to="/">Voltar para Home</Link>
      </form>
    </div>
  );
}

export default Receipt;
