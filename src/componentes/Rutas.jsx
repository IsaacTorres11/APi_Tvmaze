//Importamos los componentes 
import BarraBusqueda from "./componentes/BarraBusqueda"
import Resultado from "./componentes/Resultado"
import Inicio from "./componentes/Inicio";

//importamos useEffecty useState
import { useEffect, useState } from "react"

//importamos Route y Routes de React router
import { Routes, Route } from "react-router-dom";


const Rutas =()=>{

  // let api = ' https://api.tvmaze.com/search/shows?q=girls'
  let apiCompleta= 'https://api.tvmaze.com/shows'
  
  // Estado para los programas
  const[programas, setProgramas] = useState([])
  const [nuevosProgramas, setNuevosProgramas] = useState([])

/* crearemos una funcion para consumir la api de tvmaze
despues guardaremos los datos en el estado programas
la api solo se va a consumir una vez que se cargue la pagina  */

useEffect(()=>{  
 const consumirApi = async()=>{
  try {
    const respuesta = await fetch(apiCompleta)
    const datos = await respuesta.json()
    setProgramas(datos)
  } 
  catch (error) {
    console.log(error) 
  }
 }
 consumirApi()
 
},[])


//Creamos una funcion para buscar la pelicula
const buscar =(busqueda)=>{
  setNuevosProgramas (programas.filter(programa =>{
    return programa.name.toLowerCase().includes(busqueda.toLowerCase())
  })) 
}


// Se crea una funcion para quitar las etiquetas html del texto 
function removerHTMLTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, '');
}

    return(    
        <Routes>
            <Route path="/" render={()=> <Inicio programas={programas} removerHTMLTags={removerHTMLTags}/>}/>
            <Route path="/BarraBusqueda" render={()=> <BarraBusqueda buscar={buscar}/>}/>
            <Route path="/Resultado" render={()=> <Resultado nuevosProgramas={nuevosProgramas} removerHTMLTags={removerHTMLTags}/>}/>
        </Routes>

    )
}

export default Rutas