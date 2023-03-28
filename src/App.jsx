//Importamos los componentes
import Navegacion from "./componentes/Navegacion"
import Inicio from "./componentes/Inicio"
import Resultado from "./componentes/Resultado"

//Importamos Route y Routes de react-router
import { Route, Routes } from "react-router-dom"


function App() {
  return (

    <div className="App">
      <Navegacion />
      <h1>TvMaze</h1>

      <Routes>
        <Route path="/" element={<Inicio />}
        />
        <Route path="/blog" element={<Resultado />}
        />

      </Routes>


    </div>
  )
}

export default App