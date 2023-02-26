import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Link</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
       
       </header>
    </div>
  )
}
