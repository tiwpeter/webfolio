import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/neom-vrbQpGoN8fw-unsplash.jpg'
import HeaderSocials  from './HeaderSocials'

function heder() {
  return (
    <heder>
      <div className="container header__container">
        <h5>Helo</h5>
        <h1>Tiwpeter</h1>
        <h5 className="text-light"> fullstack</h5>
        <CTA/>
        <HeaderSocials/>

        {/* รูป me  */ }
        <div className="me">
            <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Downw  </a>
      </div>
    </heder>
    )
}

export default heder