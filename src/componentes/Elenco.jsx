
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Elenco =()=>{
    const elencoParametro = useParams()

    const [elenco, setElenco] = useState([])

    useEffect(()=>{
        const elencoApi =`https://api.tvmaze.com/shows/${elencoParametro.id}/cast`
        const consumirApi = async ()=>{
            try {
                const respuesta = await fetch(elencoApi)
                const actores = await respuesta.json()
                setElenco(actores)
            } catch (error) {
                console.log(error)
            }
        }
        consumirApi()
    },[elencoParametro])

    console.log(elenco)


    return(
        <>
        <h3>Elenco</h3>
        <div className="contenedor-elenco">
            {
               elenco.map(actor =>(
                <div key ={actor.person.id} className ='actor'>
                    <img src= {actor.person.image.medium} alt="" />
                    <h3>Actor: {actor.person.name}</h3>
                    <h4>Nacimiento:{actor.person.birthday}</h4>
                </div>
               )) 
            }
        </div>
        </>
    )
}

export default Elenco