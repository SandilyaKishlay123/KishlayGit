import React from 'react';
import "./contact.css";
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bluglfr', 'template_equcyzr', form.current, 'gEcX1lnLCfu32AU3i')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>tripathikrish06@gmail.com</h5>
            <a href="mailto:tripathikrish06@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@sandila___kishlay</h5>
            <a href="https://www.instagram.com/sandilya__kishlay?igsh=cGE4bDEzamF5NXM1" target="_blank">Reach Me on Instagram</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91-7361004294</h5>
            <a href="https://wa.me/7361004294" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="text" name='email_id' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact