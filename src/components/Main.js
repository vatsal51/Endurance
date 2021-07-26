import React from 'react';
import Shortner from './Shortner';
import introImg from '../images/illustration-working.svg';
import brand_recognition from '../images/icon-brand-recognition.svg';
import brand_details from '../images/icon-detailed-records.svg';
import brand_customize from '../images/icon-fully-customizable.svg';

const Main = () => {
  return (
    <>

      <div className="overflow">
        <div className="intro mw">
          <div className="intro-text">
            <h1>More than just shorter links</h1>
            <p>Build you brand's recognition and get detailed insights on how your links are performing</p>
            <a href="/">Get Started</a>
          </div>
          <div className="work">
            <img src={introImg} alt="intro">

            </img>
          </div>
        </div>
      </div>

      <section className="url-short">
        <Shortner />
        <div className="mw">
          <div className="statistics">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
          </div>
        </div>
        <div className="mw">
          <div className="brand-wrapper">
            <div className="brand-perform ">
              <div className="brand brand1">
                <div className="brand-svg">
                  <img src={brand_recognition} alt="recognition"></img>

                </div>
                <div className="brand-desc">
                  <h2>Brand Recognition</h2>
                  <p>Boost your brand recognition with each click. Generate links don't means a thing. Branded links help
                    instil
                    confidence in your content</p>
                </div>
              </div>
              <div className="brand brand2">
                <div className="brand-svg">
                <img src={brand_details} alt="details"></img>

                </div>
                <div className="brand-desc">
                  <h2>Detailed Records</h2>
                  <p>Boost your brand recognition with each click. Generate links don't means a thing. Branded links help
                    instil
                    confidence in your content</p>
                </div>
              </div>
              <div className="brand brand3">
                <div className="brand-svg">
                <img src={brand_customize} alt="customize"></img>

                </div>
                <div className="brand-desc">
                  <h2>Fully Customizable</h2>
                  <p>Boost your brand recognition with each click. Generate links don't means a thing. Branded links help
                    instil
                    confidence in your content</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boost-links">
          <h3>Boost your links today</h3>
          <a href="/">Get Started</a>
        </div>
      </section>
    </>

  );
};

export default Main;
