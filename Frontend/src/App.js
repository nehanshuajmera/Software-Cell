import { useEffect, useState } from 'react';
import './App.css';


import Preloader from './Components/Preloader';
import Software from './Components/Software';
import Layout from './Components/Layout';

// import Aboutus from './Pages/Aboutus';
// import Contactus from './Pages/Contactus';
// import Home from './Pages/Home';
// import Ourteam from './Pages/Ourteam';
// import Footer from './Components/Footer';

function App() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setTimeout(() => {setloading(true)}, 7000)
  }, [])
  
  return (
    
   <div>
     {!loading? 
     <>
 <Preloader/>
 <Software/>
 </>
 :
  <>
  <Layout/>  
  </>
  }

  



 

    {/* <Navbar/>
    <Home/>  */}
  {/* <Contactus/>  */}
  {/* <Aboutus/> */}
{/* 
      {/* <Footer/>
    <Aboutus/>  */}
   {/* <Ourteam/>  */}
    
   </div>
  );
}

export default App;
