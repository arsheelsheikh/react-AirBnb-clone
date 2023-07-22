import React from 'react';
import logo from '../images/airbnb-logo.png';
import '../App.css'; 

const Navbar = () => {
  return (
    <div>
      <img src={logo} className="nav--logo" alt="Airbnb Logo" />
    </div>
  );
};

export default Navbar;
