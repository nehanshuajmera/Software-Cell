import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contactBody'>
    <div className='main'>
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
              <form action="">
                <div className="form-row">                  
                  <div className="inputBox">
                    <input type="text" id="fname" name="Name" required="required" />
                    <span>First Name</span>
                    <i />
                  </div>
                  <div className="inputBox">
                  <input type="text" id="lname" name="Name" required="required" />
                    <span>Last Name</span>
                    <i />
                  </div>
                </div>
                <div className="form-row">
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
                </div>
                <div className="form-row">
                  <div className="inputBox">
                    <textarea name="description" id="description" cols="70" rows="3"></textarea>
                    {/* <input type="text" name="description" id="description" /> */}
                    <span>Description <small>(optional)</small></span>
                    <i />
                  </div>
                </div>
                
                <input type="submit" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Contact