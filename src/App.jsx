import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/common/Navbar'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Footer from './components/common/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div className=" bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-300">
      <div class="relative min-h-screen w-full flex flex-col">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
    </div>
</div>
  )
}

export default App
