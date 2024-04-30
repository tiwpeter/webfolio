import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
  return(
    <footer>
        <a href="#" className='footer__logo'>EGATOR</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expeirient">Expeirient</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testionials">Testionials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100009017355852"> <FaFacebook /> </a>
          <a href="https://www.facebook.com/profile.php?id=100009017355852"> <GrInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=100009017355852"><IoLogoTwitter /></a>

        </div>
    </footer>
  )
}

export default Footer