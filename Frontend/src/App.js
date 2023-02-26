import './App.css';

import Preloader from './Components/Preloader';
import Software from './Components/Software';

import Navbar from './Components/Navbar';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';
import Ourteam from './Pages/Ourteam';

function App() {
  return (
    
   <div>
    <Navbar/>
  {/* <Contactus/>  */}
  <Aboutus/>

      {/* <Footer/>
    <Aboutus/> 
   <Ourteam/>  */}
    
   </div>
  );
}

export default App;
