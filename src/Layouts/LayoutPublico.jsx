import {Outlet} from 'react-router-dom'

const LayoutPublico =()=>{
    return(
    <div className="App">

      {/*   Con outlet indicamos que cualquier componente llamara a este Layout */}
        <Outlet />
        
        <footer className='w-100 bg-black mb-5 mt-5 p-5 text-white text-center'>Esta es una practica realizada por Isaac Torres</footer>
    </div>
    )
}

export default LayoutPublico