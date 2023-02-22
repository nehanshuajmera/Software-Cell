import React from 'react'
import './contactus.css'
const Contactus = () => {
  return (
    <div>
      <div className="formBox">
            {/* <p>Form</p>
            <form action="" id="form">
                <div className="name">
                    <label for="Name">Name</label>
                    <input type="text" id="Name" name="Name"/>
                </div>
                <div className="phoneNo">
                    <label for="Phoneno">Contact</label>
                    <input type="tel" id="Phoneno" name="Phoneno" pattern="[0-9]{10}" required/>
                </div>
                <div className="email">
                    <label for="Email">Email</label>
                    <input type="email" name="Email" id="Email" placeholder="abc12@gmail.com" required />
                </div>
                <input type="submit" value="submit"/>
            // </form> --> */}
            <form className="box" action="index.html" method="post">
                <h1>Form</h1> 
                <input type="text" name="" placeholder="Username" required/>
                <input type="tel" name="" pattern="[0-9]{10}" placeholder="Phone No" required/>
                <input type="email" name="" placeholder="abc@gmail.com" required/>
                <input type="submit" value="submit"/>
              </form>
              
              
              
              <div className="lines">
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                              <div className="line"></div>
                          </div>
              
        </div>
    </div>
  )
}

export default Contactus