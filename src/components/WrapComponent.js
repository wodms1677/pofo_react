import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import QuickBoxComponent from './QuickBoxComponent';
import GoTopBoxComponent from './GoTopBoxComponent';

const WrapComponent = () => {
  return (
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
      <QuickBoxComponent/>
      <GoTopBoxComponent/>
    </div>
  );
};

export default WrapComponent;