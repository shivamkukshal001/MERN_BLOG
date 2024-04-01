import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/Signup'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
