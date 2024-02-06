import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import Footer from './components/common/Footer'
import Administrador from './components/pages/Administrador';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer>
    </div>
  )
}

export default App
