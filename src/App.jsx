import BarraBusqueda from "./componentes/BarraBuscqueda"


import { useEffect, useState } from "react"


function App() {

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

console.log(nuevosProgramas)




// Se crea una funcion para quitar las etiquetas html del texto 
function removerHTMLTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, '');
}



  return (
    <div className="App">
        <h1>Series y Peliculas</h1> 
        <div className="barra-busqueda">
          <BarraBusqueda buscar ={buscar}/>
        </div>
        <div className="contenedor">
          <ul>
            {
              programas.map(programa =>(

                <div className="contenedor-Programas">
                    <li>
                    <img src={programa.image.medium} alt="" />
                    <h3>Nombre: {programa.name}</h3>
                    <h4>Idioma: {programa.language}</h4>
                    <h4>Genero: {programa.genres.join(', ')}</h4> 
                    <h5>Descripcion: {removerHTMLTags(programa.summary)}</h5> 
                  </li>
                </div>
                
              ))
            }
          </ul>
        </div>
        
    </div>
  )
}

export default App