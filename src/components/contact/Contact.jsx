import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './contact.css'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yzp38lq', 'template_lmhywf4', form.current, {
        publicKey: 'DgWDEWwPb1xUbraQS',
      })
      
      e.target.reset()
      
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>tiwpeter777@gmail.com</h5>
            <a href="mailto:Yummy@gmail.com">Send a maseege</a>
          </article>
          <article className="contact__option">
          <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Ronnakorn</h5>
            <a href="https://www.messenger.com/t/721645622/">Send a maseege</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>077-666-9999</h5>
            <a href="mailto:Yummy@gmail.com">Send a maseege</a>
          </article>
        </div>
        {/* ติดต่อกลับ */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your message'required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact