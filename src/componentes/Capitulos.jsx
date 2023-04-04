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
        <h2 className="text-center mt-5">Capitulos</h2>
        <div className="capitulos">
        {
                capitulos.map(capitulo=>(
                    <div className="contenedor-capitulo d-flex w-100 m-4 border-3 border-primary-subtle border-bottom" key={capitulo.id}>
                        <div className="imagen-capitulo w-25 p-1 "> 
                           <Link to ={`/${parametro.id}/elenco`}><img className="w-100 rounded" src={capitulo?.image?.medium} alt="" /></Link>
                        </div>
                        <div className="info-capitulo w-75 px-2 border-3 border-start border-primary-subtle">
                            <h2> {capitulo.number} {capitulo.name}</h2>
                            {<div dangerouslySetInnerHTML={{ __html: capitulo.summary}} />}
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
 )   
}

export default Capitulos