import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";

function App() {
  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="logo de los simpsons"
          className='w-75'
        />
        <Button variant="warning" className='my-5'>Agregar frase</Button>
      </article>
      <Frase></Frase>
    </section>
  );
}

export default App;
