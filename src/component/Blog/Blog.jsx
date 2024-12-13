import React from 'react';
import "./Blog.css";
import { imgone,wc,wcthree,imgfour} from '../../assets';

const Blog = () => {
    return (
        <section>
        <div className='container'>

            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 text-center text-white mt-5'>
                    <h2 className='text-center'>Why Choose TSquaredC</h2>
                    <p className='text-center'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
                    </p>
                </div>
                <div className='col-lg-3'></div>
            </div>


            <div className='row'>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 div'>
                <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title"> <i className='fa-solid fa-file'></i> Tech & Talent Unified</h5>
                            <p className="para">Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                        </div>
                        <img src={imgone} className="card-img-top" />
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 div'>
                <div className="card4">
                        <div className="card-body">
                            <h5 className="card-title"> <i className='fa-solid fa-file'></i> Scale Right & Scale Fast</h5>
                            <p className="para">Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                        </div>
                        <img src={wc} className="card-img-top" />
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 div'>
                <div className="card5">
                        <div className="card-body">
                            <h5 className="card-title"> <i className='fa-solid fa-file'></i> AI Project Invovation</h5>
                            <p className="para">Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                        </div>
                        <img src={wcthree} className="card-img-top" />
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 div'>
                <div className="card6">
                        <div className="card-body">
                            <h5 className="card-title"> <i className='fa-solid fa-file'></i> Supercharge Your Product</h5>
                            <p className="para">Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                        </div>
                        <img src={imgfour} className="card-img-top" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Blog;