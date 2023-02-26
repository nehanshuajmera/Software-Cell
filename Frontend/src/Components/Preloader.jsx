import React, {useEffect} from 'react'
import { preLoaderAnim } from '../animations';
import './preloader.css'
const Preloader = () => {

    useEffect(() => {
         preLoaderAnim()
    }, []);
  return (
    <div>
        <div className="preloader">
        <div className="texts-container">
            <span>Medi-Caps</span>
            <span>Software</span>
            <span>Cell</span>
        </div>
        </div>
    </div>
  )
}

export default Preloader