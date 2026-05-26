import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Servicios from './pages/Servicios/Servicios'
import Contacto from './pages/Contacto/Contacto'
import Legal from './pages/Legal/AvisoLegal'
import Privacidad from './pages/Legal/Privacidad'
import Cookies from './pages/Legal/Cookies'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound/NotFound'

export default function App() {

  return (
    <>
    <BrowserRouter>
      <ScrollToTop />

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element= {<Home />}/>
        <Route path='about' element= {<About />}/>
        <Route path='servicios' element= {<Servicios />}/>
        <Route path='contacto' element= {<Contacto />}/>
        <Route path="legal" element={<Legal />} />
        <Route path="privacidad" element={<Privacidad />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

