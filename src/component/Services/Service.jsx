import React from 'react'
import { Closed, Closed1, Closed2, Closed3, space } from '../../assets';
import "./Service.css";

const Service = () => {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-white'>
                        <h2 className='text-center head pb-2'>Technology, Turbocharged</h2>
                        <p className='text-center'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
                        </p>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                <div className='row'>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-5'>
                        <div className="card1">
                            <img src={Closed1} />
                            <div className="card-body">
                                <h5 className="card-title">Trubo Send</h5>
                                <p className="card-texts"> Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.</p>
                                <a href="#">Check Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-5'>
                        <div className="card1">
                            <img src={Closed3} />
                            <div className="card-body">
                                <h5 className="card-title">Trubo Auth</h5>
                                <p className="card-texts">From Google to OAuth, we integrate every major SSO option, ensuring secure, seamless access for all users.</p>
                                <a href="#">Check Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-5'>
                        <div className="card1">
                            <img src={Closed2} />
                            <div className="card-body">
                                <h5 className="card-title">Trubo Stream</h5>
                                <p className="card-texts">Deliver video content without lag or interruptions. TurboStream powers your platform with flawless video performance.</p>
                                <a href="#">Check Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-5'>
                        <div className="card1">
                            <img src={Closed} />
                            <div className="card-body">
                                <h5 className="card-title">Trubo Closed</h5>
                                <p className="card-texts">Monitor, optimize, and scale your cloud infrastructure effortlessly—TurboCloud ensures your system runs at peak.</p>
                                <a href="#">Check Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div className='about'>
                        <h2 className='head2'>About TSquaredC</h2>
                        <p>Once you've selected or configured an agent team, begin
                            chatting to your built-in project manager to describe your goal,
                            provide relevant information, give feedback, and approve
                            results.<br /><br />Gone are the days of doing the legwork yourself - just
                            engage your on demand AI workforce and relax as you watch
                            your ideas come to life.</p>
                            </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <img src={space} className='img-fuild' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;