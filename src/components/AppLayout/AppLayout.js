import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { AudioAnalyser } from '../AudioAnalyser/AudioAnalyser';

export function AppLayout(props) {
  return (
    <ScrollToTop>
      <div className="app-layout">
        {/* <HeaderNav /> */}
        <AudioAnalyser />
        {props.children}
      </div>
    </ScrollToTop>
  );
}
