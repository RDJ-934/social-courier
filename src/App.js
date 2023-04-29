import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import RequestForm from './components/RequestForm';
import Submit from './components/submit';
function App() {
  
  return (
    <div className='overflow-hidden'>
    <Router>
      <Navbar/> 
      <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Hero/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/request' element={<RequestForm/>}/>  
      <Route path='/submitted' element={<Submit/>}/>     
      </Routes>
      <Footer/>
    </Router>
  </div>
  )
}

export default App;
