import React from 'react';
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';


function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sandilya Kishlay</a>
      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sandilya-kishlay-65b4821b3/"><AiFillLinkedin/></a>
        <a href="#"><AiFillFacebook/></a>
        <a href="https://github.com/SandilyaKishlay"><AiFillGithub/></a>
      </div>
      <div className="footer__copywrite">
        <small>&copy; Sandilya Kishlay | All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default footer