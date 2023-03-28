import { useEffect, useState } from "react"

const Inicio =()=>{

  //Almacenamos la api en una variable
  let apiCompleta= 'https://api.tvmaze.com/shows'

  //Declaramos un estado con un array vacio ya que en el guardaremos la info que traigamos de la Api
  const [programas, setProgramas] = useState([])
  const [buscar, setBuscar] = useState('')

  //Hacemos uso de useEffect para consumir la Api de tvMaze a penas se renderice el componente Inicio
  useEffect(()=>{
    //hacemos uso de una funcion asincrona para consumir la Api 
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

  const handleChange =(e)=>{
    
    setBuscar(e.target.value)
  }


  // Procedemos a filtrar los programas que tengan un indice menor a 30 y se guardaran en una variable llamada programas30
  // para despues iterar este arreglo nuevo en el componente y solo mostrar 30 elementos
  const programas30 = programas.filter((programa, indice) => indice < 30 )

    return(
      <div className="contenedor">
        
        <div className="busqueda">
          <input type="text" 
          placeholder="Ingresa Serie o Pelicula"
          onChange={handleChange}/>
          <button>Buscar</button>

          <h3>El valor de buscar es: {buscar}</h3>
        </div>

        <div className="Programas">
          {
            programas30.map((programa, indice)=>(
             <div className="programa" key={indice}>
              <div className="portada">
                <img src={programa.image.medium} alt="" />
              </div>
              <h2>{programa.name}</h2>
             </div>
            ))
          }
        </div>

      </div>
    )
   
    
}

export default Inicio




    



