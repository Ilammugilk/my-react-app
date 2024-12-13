import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top">
    <div className="container">
      <a className="navbar-brand logo" href="#">T2C</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mx-auto mb-2 mb-md-0">
         
            <li className="nav-item me-3">
            <a className="nav-link active"> Home</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link active">About</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link active">Service</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link active">Blogs</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link active">News</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link active">Contact</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button className='btn'>Get Started</button>
        </form>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;