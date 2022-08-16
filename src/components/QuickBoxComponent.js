import React from 'react';

const QuickBoxComponent = () => {
  return (
    <div id="quickBox" className="quick-btn">
      <div>
        <a href="#!"><i className="fa fa-shopping-cart"></i><span>Buy Theme</span></a>
      </div>
      <div>
        <a href="#!"><i className="material-icons">email</i><span>Quick Question?</span></a>
      </div>
    </div>
  );
};

export default QuickBoxComponent;