import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Service from '../Services/Service';
import Blog from '../Blog/Blog';
import New from '../News/New';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Header = () => {
  return (
    <div>
    <header>
      <div className='container'>
      <Navbar />
      <div className='row'>
        <div className='col-lg-4 content'>
          <h1 className='text-white'>The Future of Tech <br /> <span> Starts Here </span></h1>
          <p>From concept to market, T²C supercharges your tech journey with top-tier talent,<br /> cutting-edge tools, and rapid execution. Let's build groundbreaking <br />solutions that define tomorrow.</p>
          <button className='btn btn-dark text-white'>Let's Build Everything Extraordinary</button>
        </div>
      </div>
       <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 text-center text-white'>
                  <h2 className=' text-center'>Innovation in Action</h2>
                  <p className=' text-center'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
                  </p>
                </div>
                <div className='col-lg-3'></div>
              </div>
      </div>
    </header>
    <About/>
    <Service/>
    <Blog/>
    <New/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default Header;