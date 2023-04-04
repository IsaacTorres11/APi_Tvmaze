import { Suspense } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


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

  // Con esta funcion nos encargamos de filtrar los programas en base a la busqueda realizada con la barra de busqueda
  const filtroProgramas = programas.filter(programa => {
    return programa.name.toLowerCase().includes(buscar.toLowerCase()) 
  })
  
  

  // Procedemos a filtrar los programas que tengan un indice menor a 30 y se guardaran en una variable llamada programas30
  // para despues iterar este arreglo nuevo en el componente y solo mostrar 30 elementos
  //Esta funcion ya no se usara 
  const programas30 = programas.filter((programa, indice) => indice < 30 )

    return(
      <div className="container-sm container-md container-xl container-fluid pt-4 ">

        <h1 className="display-3 text-primary">TvMaze</h1>
        <div className="busqueda">
          <input type="text" 
          className="form-control border-0 mt-5 mb-5 input-group-text p-3"
          placeholder="Ingresa Serie o Pelicula"
          value={buscar}
          onChange={handleChange}/>
        </div>

        <Suspense fallback={<h2>Cargando...</h2>}>
          <div className="Programas d-flex flex-wrap justify-content-around"> 
            {
              filtroProgramas.map((programa, indice)=>(
              <div className="programa m-2" key={indice} > 
                <div className="portada mx-auto">
                  <Link to ={`/capitulos/${programa.id}`}> <img  src={programa.image.medium} className=" rounded w-100 h-100" alt="" /> </Link>
                </div>
                <div className="titulo-serie text-black text-center">
                  <h2 className=" h5">{programa.name}</h2>
                </div> 
              </div>
              ))
            }
          </div>
        </Suspense>
          
      </div>
    )
   
    
}

export default Inicio




    



