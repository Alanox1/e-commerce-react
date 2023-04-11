import './App.css'
import Aside from './components/Aside'
import Main from './components/Main'
import { CarritoProvider } from './context/ContextCarrito'

function App() {

  return (
    <CarritoProvider>
        <div className='contenedor'>
            <Aside />
            <Main />
        </div>
    </CarritoProvider>
   
  
   
  )
}

export default App
