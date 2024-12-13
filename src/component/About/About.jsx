import React from 'react';
import './About.css';
import { ken } from '../../assets';

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xxl-6 col-xl-6 col-md-12 col-sm-12 col-12'>
            <div className='box'>
              <div>
              <img src={ken}/>
              </div>
              <div>
                <h4 className='text-center text-white'>Revolutionized Kenverse’s AI capabilities in just 6 months</h4>
                <div className='chart'>
                <p className="text-center text-white">
                  From concept to deployment, T²C engineered an AI transformation that positioned Kenverse as a market leader..</p>
                  </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-xxl-6 col-xl-6 col-md-12 col-sm-12 col-12'>
            <div className='box'>
              <div>
              <img src={ken}/>
              </div>
              <div>
                <h4 className='text-center text-white'>Revolutionized Kenverse’s AI capabilities in just 6 months</h4>
                <div className='chart'>
                <p className="text-center text-white">
                  From concept to deployment, T²C engineered an AI transformation that positioned Kenverse as a market leader..</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;