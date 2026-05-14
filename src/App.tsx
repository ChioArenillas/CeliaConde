import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Servicios from './pages/Servicios/Servicios'
import Contacto from './pages/Contacto/Contacto'

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element= {<Home />}/>
        <Route path='about' element= {<About />}/>
        <Route path='servicios' element= {<Servicios />}/>
        <Route path='contacto' element= {<Contacto />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

