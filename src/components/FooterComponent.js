import React from 'react';

const FooterComponent = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="gap">
          <div className="wrap">
            <div className="content">
              <div className="top">
                <ul>
                  <li>
                    <div className="col-gap">
                      <div className="col-wrap">
                        <h2>
                          London Based<br/>Creative Studio
                        </h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="col-gap">
                      <div className="col-wrap">
                        <address>
                          301 The Greenhouse,<br/>
                          Custard Factory, London, E2 8DY.<br/>
                          <a href="mailto:wodms1677@naver.com" title="wodms1677@naver.com">wodms1677@naver.com</a> | <a href="tel:010-8943-4261" title="010-8943-4261">010-8943-4261</a>
                        </address>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="col-gap">
                      <div className="col-wrap">
                        <h1><img src="./img/logo-white.png" alt="logo"/></h1>
                        <p>
                          <span><a href="#!">TWITTER</a></span>
                          <span><a href="#!">FACEBOOK</a></span>
                          <span><a href="#!">INSTAGRAM</a></span>
                          <span><a href="#!">DRIBBBLE</a></span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <ul>
                  <li>
                    <div className="col-gap">
                      <div className="col-wrap">
                        <h3>POFO - Portfolio Concept Theme</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="col-gap">
                      <div className="col-wrap">
                        <p>&copy; 2022 POFO is Proudly Powered by <a href="https://www.themezaa.com/">ThemeZaa</a></p>                        
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;