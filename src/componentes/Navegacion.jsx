//En este componente configuramos la barra de Navegacion:

import { Link } from "react-router-dom"

/* La funcion Link de react router viene a sustituir los enlaces tradicionales de html <a> por <Link>
En este caso trabaja con la propiedad to con la cual le indicaremos el nombre de la ruta a la que vamos a ingresar
una vez que se le de click en el enalce deseado */

const Navegacion =()=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="btn btn-outline-primary" to='/'>Inicio</Link>
                <Link className="btn btn-outline-primary" to='/resultado'>Resultado</Link>
                <Link className="btn btn-outline-primary" to='/personajes'>Personajes</Link>

            </div>
        </nav>
    )
}

export default Navegacion
