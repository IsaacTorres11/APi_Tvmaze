const Resultado =({nuevosProgramas, removerHTMLTags})=>{
    console.log(nuevosProgramas)
    return(
        <div>
            {
                nuevosProgramas.map(elemento =>(
                   <div>
                    <img src={elemento.image.medium} alt="" />
                    <h3>Nombre:{elemento.name}</h3>
                    <h4>Idioma: {elemento.language}</h4>
                    <h4>Genero: {elemento.genres.join(', ')}</h4>
                    <h5>Descripcion: {removerHTMLTags(elemento.summary)}</h5> 
                   </div>
                ))
            }
        </div>
    )
}

export default Resultado