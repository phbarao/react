import React from "react";
import { jsPDF } from "jspdf";

const doc = new jsPDF();

const generatePDF = () => {
  doc.html(document.body, {
    callback: function (doc) {
      doc.save();
    },
    x: 20,
    y: 20,
  });
};

function App() {
  return (
    <>
      <h1>Lista</h1>
      <button onClick={generatePDF}>PDF</button>
    </>
  );
}

export default App;
