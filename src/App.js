import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import {useState, useEffect, React} from"react"
function App() {
  //creo state
const [personaje, setPersonaje] = useState({});

useEffect(()=>{
  //logica a ejecutar
consultarApi()
},[]);

const consultarApi = async()=>{
  const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
  const resultado = await respuesta.json()
  console.log(respuesta)
  console.log(resultado[0])
  //Guardar objecto dentro del estate
  setPersonaje(resultado[0])

}

  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="logo de los simpsons"
          className='w-75'
        />
        <Button variant="warning" className='my-5' onClick={()=> consultarApi()} >Agregar frase</Button>
      </article>
      <Frase personaje={personaje}></Frase>
    </section>
  );
}

export default App;
