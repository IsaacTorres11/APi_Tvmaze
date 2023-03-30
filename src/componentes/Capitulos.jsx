import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const Capitulos =()=>{
    const parametro = useParams()
    const [capitulos, setCapitulos] = useState([])

    //Se usa el useEffect para renderizar el contendio cada vez que el parametro cambie 
    useEffect(()=>{
        const apiPrograma = `https://api.tvmaze.com/shows/${parametro.id}/episodes`
        const consumirPrograma = async ()=>{
            try {
                const respuesta = await fetch(apiPrograma)
                const episodios = await respuesta.json()
                setCapitulos(episodios)
            } 
            catch (error) {
                    console.log(error);
            }
        }
        consumirPrograma()
    },[parametro])

    //Esta funcion se usa para eliminar las etiquetas html de un texto 
    function removerHTMLTags(str) {
        return str.replace(/<\/?[^>]+(>|$)/g, '');
      }

 return (
    <div>
        <h2>capitulos</h2>
        <div className="capitulos">
            <ul>
            {
                capitulos.map(capitulo=>(
                    <li key={capitulo.id}>
                        <Link to ={`/${parametro.id}/elenco`}><img src={capitulo?.image?.medium} alt="" /></Link>
                        <h2>{capitulo.number} {capitulo.name}</h2>
                        {<div dangerouslySetInnerHTML={{ __html: capitulo.summary}} />}
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
 )   
}

export default Capitulos