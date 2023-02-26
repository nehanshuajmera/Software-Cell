import { useEffect, useState } from 'react';
import './App.css';


import Preloader from './Components/Preloader';
import Software from './Components/Software';
import Layout from './Components/Layout';

<<<<<<< HEAD
import Navbar from './Components/Navbar';
=======
>>>>>>> e9e1ea8e3ff0e97218013f96061d2619af9d16d5
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
 <Preloader/>
 <Software/>
<<<<<<< HEAD
 <Navbar/>
{/* <Home/> */}
=======
 </>
 :
  <>
  <Layout/>  
  </>
  }

  



 
>>>>>>> e9e1ea8e3ff0e97218013f96061d2619af9d16d5

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
