//Importamos los componentes
import LayoutPublico from "./Layouts/LayoutPublico"
import Navegacion from "./componentes/Navegacion"
import Inicio from "./componentes/Inicio"
import ProgramaDetallado from "./componentes/ProgramaDetallado"
import Personajes from "./componentes/Personajes"
import NotFound from "./componentes/NotFound"

//Importamos Route y Routes de react-router
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navegacion />
      

      <Routes>
        {/* Esto es una ruta anidada y sirve para mostrar el layout en todos los componentes y rutas */}
        <Route path ='/' element={<LayoutPublico />}>
           <Route path="/" element={<Inicio />} />
           {/* con :id indicamos que esa ruta tendra un parametro  esto es una ruta con parametro*/}
           <Route path="/programa/:id" element={<ProgramaDetallado />} />
           <Route path="/personajes" element={< Personajes />} /> 
           <Route path="/*" element={<NotFound />} /> 
        </Route>
        
      </Routes>
    </>
    
  )
}

export default App