//Importamos los componentes
import LayoutPublico from "./Layouts/LayoutPublico"
import Navegacion from "./componentes/Navegacion"
import Inicio from "./componentes/Inicio"
import Capitulos from "./componentes/Capitulos"
import ProgramaDetallado from "./componentes/ProgramaDetallado"
import Elenco from "./componentes/Elenco"
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
           <Route path="/capitulos/:id" element={<Capitulos />} />
           <Route path="/:id/elenco" element ={<Elenco />}/>

           <Route path="/acerca-de/" element={<ProgramaDetallado />} />
           <Route path="/*" element={<NotFound />} /> 
        </Route>
        
      </Routes>
    </>
    
  )
}

export default App