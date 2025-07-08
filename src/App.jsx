
import './App.css'
import Home from './Views/Pages/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import About from './Views/Pages/About.jsx'
import Service from './Views/Pages/Service.jsx'

function App() {
  useEffect(() => {
    Aos.init({

      once: true,
      offset: 50,
      duration: 800,    // only animate once while scrolling
      easing: 'ease-in-out',
    });
  }, []);
  useEffect(() => {
    Aos.refresh();
  });
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // delay to allow layout to stabilize
  }, []);


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
