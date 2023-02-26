import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Preloader from './Components/Preloader';
import Software from './Components/Software';

import Navbar from './Components/Navbar';
// import Aboutus from './Pages/Aboutus';
// import Contactus from './Pages/Contactus';
// import Home from './Pages/Home';
// import Ourteam from './Pages/Ourteam';
// import Footer from './Components/Footer';
function App() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setTimeout(() => {setloading(true)}, 8000)
  }, [])
  
  return (
    
   <div>
 <Preloader/>
 <Software/>
 <Navbar/>
{/* <Home/> */}

    {/* <Navbar/>
    <Home/>  */}
  {/* <Contactus/>  */}
  {/* <Aboutus/> */}

      {/* <Footer/>
    <Aboutus/>  */}
   {/* <Ourteam/>  */}
    
   </div>
  );
}

export default App;
