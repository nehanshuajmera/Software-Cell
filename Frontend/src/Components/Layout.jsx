import React from 'react'
import Navbar from './Navbar'
import Home from '../Pages/Home'


import { Route, Routes } from "react-router-dom";
import Event from '../Pages/Event';
import Project from '../Pages/Project';
import Community from '../Pages/Community';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
// import Footer from './Components/Footer';

const layout = () => {
  return (
    <div>
        <Navbar/>
         <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route  path='/Event' element={<Event/>}/> 
         <Route  path='/Project' element={<Project/>}/> 
         <Route  path='/community' element={<Community/>}/> 
         <Route  path='/about' element={<About/>}/> 
         <Route  path='/contact' element={<Contact/>}/> 
         </Routes> 
    </div>
  )
}

export default layout