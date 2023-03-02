import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Home from './Home'

import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
    
    <>
   
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/" element={<Home />}/>
    {/* <Route path="" element={<h1>Helow React Router</h1>}/> */}
    </Routes>
</BrowserRouter>

    </>
  )
}

export default App