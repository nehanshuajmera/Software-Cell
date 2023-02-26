import { useEffect, useState } from 'react';
import './App.css';


import Preloader from './Components/Preloader';
import Software from './Components/Software';
import Layout from './Components/Layout';


function App() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setTimeout(() => {setloading(true)}, 7000)
  }, [])
  
  return (
    
   <div>
    {!loading ?
    <> 
    <Preloader />
 <Software />
 </>
:
<>
<Layout />
</>
}
   </div>
  );
}

export default App;
