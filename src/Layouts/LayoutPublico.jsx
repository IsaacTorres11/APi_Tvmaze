import {Outlet} from 'react-router-dom'

const LayoutPublico =()=>{
    return(
    <div className="App">

      {/*   Con outlet indicamos que cualquier componente llamara a este Layout */}
        <Outlet />
        
        <footer>Pie de Pagina</footer>
    </div>
    )
}

export default LayoutPublico