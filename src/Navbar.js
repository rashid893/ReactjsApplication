import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link  class="nav-link active" aria- to="/">Home</Link>
        
        </li>
        <li class="nav-item">
        <Link to="/about"  class="nav-link active" aria->About</Link>
        </li>
        <li  class="nav-link active" aria- className="nav-item">
        <Link  class="nav-link active" aria- to="/contact">Cntact</Link>
        </li>
      </ul>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
       
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    

    {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contacct</Link></li>
    </ul> */}
    {/* <ul>
        <li><a href="/">Home</a></li>.
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul> */}
    </>
  )
}

export default Navbar