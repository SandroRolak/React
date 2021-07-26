//props + [state] + render = view

import React, { useState } from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./styles.css";

const users = ["John Doe", "Jane Doe"];

function ResultadoSoma({ a, b }) {
  const [showResult, setShowResult] = useState(false);

  const [values, setValues] = useState({ a, b });

  function onChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="formulario">
      <input name="a" value={values.a} onChange={onChange} />
      <input name="b" value={values.b} onChange={onChange} />
      {showResult && (
        <div>
          O resultado de {values.a} + {values.b} ={" "}
          {Number(values.a) + Number(values.b)}
        </div>
      )}

      <button onClick={() => setShowResult(!showResult)}>
        {showResult ? "Esconder Resultado" : "Mostrar Resultado"}{" "}
      </button>

      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDom.render(
  <div>
    <h1>Sandro Rolak</h1>
    <App />
    <ResultadoSoma a={5} b={15} />
  </div>,
  document.getElementById("root")
);
