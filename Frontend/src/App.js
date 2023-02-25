import './App.css';
import Preloader from './Components/Preloader';

// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

// import Aboutus from './Pages/Aboutus';
// import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
// import Ourteam from './Pages/Ourteam';

function App() {
  return (
    
   <div>
 <Preloader/>
    
    <Navbar/>
    <Home/> 
  {/* <Contactus/>  */}
  {/* <Aboutus/> */}

      {/* <Footer/>
    <Aboutus/> 
   <Ourteam/>  */}
    
   </div>
  );
}

export default App;
