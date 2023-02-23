import React from 'react'
import './Contactus.css'
const Contactus = () => {
  return (
    <div>
      {/* <div className="formBox">
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
              
        </div> */}
        <div className="form2">
          <div className="box">
            <div className="formBox2">
              <h2>Contact Us</h2>
              <div className="inputBox">
                <input type="text" id="Name" name="Name" required="required" />
                <span>Name</span>
                <i />
              </div>
              <div className="inputBox">
                <input
                  type="tel"
                  id="Phoneno"
                  name="Phoneno"
                  pattern="[0-9]{10}"
                  required="required"
                />
                <span>Phone No.</span>
                <i />
              </div>
              <div className="inputBox">
                <input type="email" name="Email" id="Email" required="required" />
                <span>Email</span>
                <i />
              </div>
              <input type="submit" defaultValue="Submit" />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Contactus