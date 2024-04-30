import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";


function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href='http://linkedin.com' target='_blank'>
        <FaLinkedinIn />
      </a>
      <a href='http://github.com' target='_blank'>
      <FaGithub />
      </a>
      <a href='http://dribbble.com' target='_blank'>
      <FaDribbbleSquare />
      </a>
    </div>
  );
}

export default HeaderSocials;
//ใส่ข้อความ ระหว่าง เอาเมาส์ชี้ เพื่อให้เห็นได่้ชัด