import React from 'react';
import "./New.css";
import { Frameone,Frametwo } from '../../assets';

const New = () => {
    return (
        <section>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 text-center text-white mt-5'>
                    <h2 className='text-center'>Choose Your Solution <br />For Emerging Businesses</h2>
                    <p className='text-center'>Propel your new age business forward with our Solutions:
                    </p>
                </div>
                <div className='col-lg-3'></div>
            </div>

            <div className='row'>
                <div className='col-lg-5'>
                    <div className="card-one mt-5 p-2">
                        <img src={Frameone} class="card-img-top"/>
                            <div classnam="card-body">
                                <div className='row p-3'>
                                    <div className='col-lg-8'>
                                    <h5 className="card-title">Plug and Play solutions</h5>
                                    <p className="card-text">Instant Integration, Immediate Impact: <br/>
                                    <span className='span2'>Dive into the market without delay, utilizing
                                         our fully integrated tech stack that meshes seamlessly with your operations.</span></p>
                                    </div>
                                    <div className='col-lg-4'>
                                    <a className="btn text-center">Customize Your Path</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <div className="card-one mt-5">
                        <img src={Frametwo} className="card-img-top"/>
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-lg-9'>
                                    <h5 className="card-title">Customizable Solutions </h5>
                                        <span className='span2'>
                                        Customizable Solutions designed for your business's unique demands & growth trajectory.
                                        </span>
                                        <p className='card-text'>Build, Expand:<br/>
                                        <span className='span2'>
                                            Engineered for long-term evolution, these solutions ensure your 
                                            technology infrastructure grows as dynamically as your business.</span>
                                        </p>
                                    </div>
                                    <div className='col-lg-3'>
                                    <a href="#" className="btn text-center">Customize Your Path</a>
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

export default New;