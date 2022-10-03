import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes,Route,Link  } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
   

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>



   
   
    </>
  

  )
}

export default App