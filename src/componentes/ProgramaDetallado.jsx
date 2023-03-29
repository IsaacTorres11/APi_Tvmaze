import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProgramaDetallado =()=>{
    //useParmas trae el valor del id que se especifica en el componente inicio y con ayuda de la ruta dinamica en App.jsx
    const parametro = useParams()
    console.log(parametro)


    const [capitulos, setCapitulos] = useState([])

    //Se usa el useEffect para renderizar el contendio cada vez que el parametro cambie 
    useEffect(()=>{
        const apiPrograma = `https://api.tvmaze.com/shows/${parametro.id}/episodes`
        const consumirPrograma = async ()=>{
            try {
                const respuesta = await fetch(apiPrograma)
                const episodios = await respuesta.json()
                setCapitulos(episodios)
            } catch (error) {
                console.log(error);
            }
        }

        consumirPrograma()

    },[parametro])

    

    function removerHTMLTags(str) {
        return str.replace(/<\/?[^>]+(>|$)/g, '');
      }
      

    return(
        <div>
            <h2>capitulos</h2>

            <div className="capitulos">
                <ul>
                {
                    capitulos.map(capitulo=>(
                        <li>
                            <img src={capitulo.image.medium} alt="" />
                            <h2>{capitulo.number} {capitulo.name}</h2>
                            <h3>{removerHTMLTags(capitulo.summary)}</h3>
                        </li>
                    ))
                }
                </ul>
            </div>

        </div>
    )
}

export default ProgramaDetallado