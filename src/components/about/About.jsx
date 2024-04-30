import React from 'react'
//import ME from '' /**../../assets/20470.jpg */
import { FaAward } from "react-icons/fa6";
import { FaBookJournalWhills } from "react-icons/fa6";
import { IoFolderOpen } from "react-icons/io5";
import './about.css'
{/* 1.28.27 error about  */}

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
           {/**<img src={} alt="About Image" /> */} 
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaBookJournalWhills className='about__icon' />
              {/* ใส่ วงล้อมรอบ */}
              <h5>Skill</h5>
              <small>20+</small>
            </article>

            <article className='about__card'>
              <IoFolderOpen className='about__icon' />
              <h5>Project</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
          these are my go to tech stack to make any projects happen i am always eager of learning more about my current stack and new technologies that could expand my horizons
          </p>

          <a href="3contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About