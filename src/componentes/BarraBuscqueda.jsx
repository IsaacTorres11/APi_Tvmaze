import { useState } from "react"

const BarraBusqueda =({buscar})=>{
    const [busqueda, setBusqueda] = useState('')

    const handleChange =(e)=>{
        setBusqueda(e.target.value)
    }

    console.log(busqueda)

    return(
        <div>
            <label htmlFor="HTML">Realizar Busqueda</label>
           <input type="text" 
           placeholder="Ingresa Serie O Pelicula"
           onChange={handleChange}/>
           
           <button onClick={()=> buscar(busqueda)}> Buscar </button>
        </div>
    )
}

export default BarraBusqueda