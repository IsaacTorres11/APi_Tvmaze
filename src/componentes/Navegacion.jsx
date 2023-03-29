//En este componente configuramos la barra de Navegacion:

import { Link, NavLink} from "react-router-dom"

/* La funcion Link de react router viene a sustituir los enlaces tradicionales de html <a> por <Link>
En este caso trabaja con la propiedad to con la cual le indicaremos el nombre de la ruta a la que vamos a ingresar
una vez que se le de click en el enalce deseado */

/* La funcion NavLink es una version mejorarda de Link ademas de que en automatico agrega la clase Active proporcionada por Boostrap */

const Navegacion =()=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to='/'>Inicio</NavLink>
                <NavLink className="btn btn-outline-primary" to='/programa/'>Programa</NavLink>
                <NavLink className="btn btn-outline-primary" to='/personajes'>Personajes</NavLink>

            </div>
        </nav>
    )
}

export default Navegacion
