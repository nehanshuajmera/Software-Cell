import React from 'react'
import Navbar from './Navbar'
import Home from '../Pages/Home'

// import Contactus from './Pages/Contactus';
// import Ourteam from './Pages/Ourteam';
// import Footer from './Components/Footer';

import { Route, Routes } from "react-router-dom";
import Aboutus from '../Pages/Aboutus';

const layout = () => {
  return (
    <div>
        <Navbar/>
         <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route  path='/about' element={<Aboutus/>}/> 
         </Routes> 
         
         
    </div>
  )
}

export default layout