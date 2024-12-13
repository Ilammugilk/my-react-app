import React from 'react';
import "./Footer.css";
import {Navlogo} from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className='logo mb-2'>
            <img src={Navlogo}/>
            </div>
            <p>TSquaredC Ltd.<br/>
            161, Basavanagar<br/>
            Bangalore, Karnataka.</p>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className='row'>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
                <h6>Product</h6>
                <p>Home<br/>
                About<br/>
                Service<br/>
                Faq<br/>
                Why Choose<br/>
                Contact</p>
              </div>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
                <h6>Company</h6>
                <p>Vision<br/>
                Mission<br/>
                Value<br/>
                Team</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='row'>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <p>© 2024 TSquaredC  |  All Rights Reserved.</p>
          </div>
           <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"></div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <p className='right'>Privacy Policy Treams & Services </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;