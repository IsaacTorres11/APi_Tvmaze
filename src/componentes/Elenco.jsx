
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
        <div className="contenedor-elenco w-100 m-auto">
            <h3 className="text-center m-5">Elenco</h3>
            <div className="contenedor-elenco d-flex flex-wrap justify-content-around">
                {
                elenco.map(actor =>(
                    <div key ={actor.person.id} className ='actor m-2  d-flex flex-wrap  '>
                        <div className="img-actor w-100">
                            <img src= {actor.person.image.medium} alt="" className="w-100" />
                        </div>
                        <div className="info-actor text-center w-100 m-3">
                            <h3 className="h6">Actor: {actor.person.name}</h3>
                            <h4 className="h6">Nacimiento:{actor.person.birthday}</h4>
                        </div>
                        
                    </div>
                )) 
                }
            </div>
        </div>
    )
}

export default Elenco