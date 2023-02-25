import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <header>
        <navbar id="navbar">
          <div className="cell-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Loading Error" />
          </div>
          <div className="left-elements">
            <ul>
              <li className="left-list-items"><a href="/">Home</a></li>
              <li className="left-list-items"><a href="/events">Events</a></li>
              <li className="left-list-items"><a href="/projects">Projects</a></li>
              <li className="left-list-items"><a href="/our community">Our Community</a></li>
              <li className="left-list-items"><a href="/about us">About Us</a></li>
              <li className="left-list-items"><a href="/contact us">Contact Us</a></li>
            </ul>
          </div>
          <div className="right-elements">
            <ul>
              {/* <li className="right-list-items"><a href="#">Sign In</a></li> */}
            </ul>
          </div>
        </navbar>
      </header>
    </div>
  )
}
