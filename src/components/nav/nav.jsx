import React, { useState } from 'react';
import './nav.css';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { RiServiceLine } from 'react-icons/ri';
import { RiMessage2Line } from 'react-icons/ri';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => handleNavClick('#')}>
        <IoHomeOutline />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => handleNavClick('#about')}>
        <FaRegUserCircle />
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => handleNavClick('#experience')}>
        <FaBookOpen />
      </a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => handleNavClick('#services')}>
        <RiServiceLine />
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => handleNavClick('#contact')}>
        <RiMessage2Line />
      </a>
    </nav>
  );
}

export default Nav;