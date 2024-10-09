import React from 'react';
import logo from '../assets/download.png';

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className='logo' src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header