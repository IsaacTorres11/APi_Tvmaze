const Resultado =({resultado})=>{
    return(
        <div>
            {
                resultado.map(programa =>(
                    <h2>{programa.name}</h2>
                ))
            }
        </div>
    )
}

export default Resultado