import React from 'react';

const Section5Component = () => {
  return (
    <section id="section5">
      <div className="container">
        <div className="gap">
          <div className="wrap">
            <div className="content">
              <ul className="svg-box">
                <li>
                  <div className="col-gap">
                    <div className="col-wrap">
                      <span className="count-num">90%</span>
                      <svg viewBox="0 0 150 150" className="ring-back">
                        <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent'/>
                      </svg>
                      <svg viewBox="0 0 150 150" className="ring-front ring1">
                        <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#888' fill='transparent'/>
                      </svg>
                    </div>
                    <h2>GRAPHIC DESIGN</h2>
                  </div>
                </li>
                <li>
                  <div className="col-gap">
                    <div className="col-wrap">
                      <span className="count-num">75%</span>
                      <svg viewBox="0 0 150 150" className="ring-back">
                        <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent'/>
                      </svg>
                      <svg viewBox="0 0 150 150" className="ring-front ring2">
                        <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#888' fill='transparent'/>
                      </svg>
                    </div>
                    <h2>WEB DESIGN</h2>
                  </div>
                </li>
                <li>
                  <div className="col-gap">
                    <div className="col-wrap">
                      <span className="count-num">90%</span>
                      <svg viewBox="0 0 150 150" className="ring-back">
                        <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent'/>
                      </svg>
                      <svg viewBox="0 0 150 150" className="ring-front ring3">
                        <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#888' fill='transparent'/>
                      </svg>
                    </div>
                    <h2>BRANDING</h2>
                  </div>
                </li>
                <li>
                  <div className="col-gap">
                    <div className="col-wrap">
                      <span className="count-num">62%</span>
                      <svg viewBox="0 0 150 150" className="ring-back">
                        <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent'/>
                      </svg>
                      <svg viewBox="0 0 150 150" className="ring-front ring4">
                        <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#888' fill='transparent'/>
                      </svg>
                    </div>
                    <h2>PHOTOGRAPHY</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5Component;