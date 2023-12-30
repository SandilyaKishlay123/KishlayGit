import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
function headersocial() {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/sandilya-kishlay-65b4821b3' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/SandilyaKishlay' target="_blank"><BsGithub/></a>
        <a href='mailto:tripathikrish06@gmail.com' target="_blank"><SiGmail/></a>
    </div>
  )
}
 
export default headersocial