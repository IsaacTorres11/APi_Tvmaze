
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
        </>
    )
}

export default Elenco