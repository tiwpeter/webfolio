import React, { useState } from 'react';
import rock from '../../assets/ROCK.jpg';
import './ff.css';

function Portfolio() {
    return (
        <section id='portfolio' className="bg-gray-100 py-8">
  <div className="container mx-auto px-4">
    <div className="bg-white shadow-md rounded-lg p-8">
      <img 
        src={rock}
        className='image-size'
        alt="Portfolio Image" // เพิ่ม attribute alt เพื่อให้รู้จักกรอบ
      />
      <p>ddd</p>
    </div>
  </div>
</section>
      )
  }
  export default Portfolio;