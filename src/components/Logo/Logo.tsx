import React from 'react';
import logo from './img/logo.svg';
import './logo.scss';

export const Logo = () => (
  <a href="#" className="logo">
    <img src={logo} alt="Nice Gadgets logo" className="logo__image" />
  </a>
);
