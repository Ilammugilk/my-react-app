import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
       <section>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 mt-5'>
                    <div className='card-con p-3'>
                        <div className='row m-4'>
                            <div className='col-lg-6'>
                                <h5 className='text-white'>Ready to Build the Future? Let’s Make It Happen</h5>
                            </div>
                            <div className='col-lg-6'>
                                <span>Your breakthrough idea deserves a world-class execution. Partner with T²C and transform your vision into reality.</span>
                            </div>
                        </div>
                        <div className='row mb-3 ms-2 me-2'>
                            <div className='col-lg-6'>
                                <label className='text-white'>Full Name</label>
                                <input type="text" className="form-control" placeholder='Full Name'/>
                            </div>
                            <div className="col-xl-6">
                                <label className='text-white'>Last Name</label>
                                <input type="text" className="form-control" placeholder='Last Name'/>
                            </div>
                        </div>
                        <div className='row mb-3 ms-2 me-2'>
                            <div className='col-lg-6'>
                                <label className='text-white'>Email</label>
                                <input type="email" className="form-control" placeholder='Email'/>
                            </div>
                            <div className="col-xl-6">
                                <label className='text-white'>Phone Number</label>
                                <input type="number" className="form-control" placeholder='+1-202-555-0174'/>
                            </div>
                        </div>
                        <div className='row mb-3 ms-2 me-2'>
                            <div className='col-lg-12 text-center'>
                                <button className="btn text-center">Send Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 mb-5'>
                    <div className='row'>
                        <div className='col-lg-12 mt-5'>
                        <div className='card-con p-2'>
                                <div className='row'>
                                    <div className='col-lg-2 pt-2'>
                                    <i className='fa fa-location-dot'></i>
                                    </div>
                                    <div className='col-lg-10 p-2'>
                                    <h5 className='text-white'>Location</h5>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-lg-12 mt-3 mb-3'>
                        <div className='card-con p-2'>
                                <div className='row'>
                                    <div className='col-lg-2 pt-2'>
                                    <i className='fa fa-headset'></i>
                                    </div>
                                    <div className='col-lg-10 p-2'>
                                    <h5 className='text-white'> Contact</h5>
                                <span>Lorem ipsum dolor<br/>Lorem ipsum dolor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='card-con p-2'>
                                <div className='row'>
                                    <div className='col-lg-2 pt-2'>
                                    <i className='fa-regular fa-envelope'></i>
                                    </div>
                                    <div className='col-lg-10 p-2'>
                                    <h5 className='text-white'> Email Address</h5>
                                <span>Lorem ipsum dolor<br/>Lorem ipsum dolor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
    )
}

export default Contact;