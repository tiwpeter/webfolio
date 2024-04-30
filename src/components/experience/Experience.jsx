import React from 'react';
import './Experience.css';
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaHtml5 } from "react-icons/fa";


function Experience() {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <h1>web develop</h1>
      <h1>web api resfull</h1>
      <h1>andoid app</h1>
      <h1>manage database</h1>

      
      <h5>skill</h5>


      <div className="container experience__container">
        {/* FRONTEND */}
        <div className="experience__frontend">
          <h3>Frontend Experience</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <FaHtml5 className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'> Experienced </small>
            </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Dart</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Javscript</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__backend">
          <h3>Backend Experience</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            {/* ขยับเป็นตัวมีความสำคัญ */}
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Node.js</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>C#</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>assembly</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>JAVA</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
          </div>
        </div>
        {/* API */}
        <div className="experience__API">
        <h3>API Experience</h3>
        <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Flask</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Postman</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>  MERN Stack </h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
        </div>
        <div className="experience__API">
        <h3>Skills being practiced
        </h3>

        <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Deep Learning
</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4>Generative AI</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className='experience_details'>
              <HiMiniCheckBadge className='experience__details-icon' />
              <div>
              <h4> Machine Learning</h4>
              <small className='text-light'> Experienced </small>
              </div>
            </article>

        </div>

      </div>
    </section>
  );
}

export default Experience;