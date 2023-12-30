import React from 'react';
import './nav.css';
import {BiHome} from 'react-icons/bi';
import {SiAboutdotme} from 'react-icons/si';
import {BiUserCircle} from 'react-icons/bi';
import {MdMiscellaneousServices} from 'react-icons/md';
import {IoMdContact} from 'react-icons/io';
import { useState } from 'react';

function Nav() {
  const[activeNav, setActiveNav]=useState('#')
  return (
    <nav>
        <a href='#'onClick={()=>setActiveNav('#')}className={activeNav==='#' ? 'active':''}><BiHome/></a>
        <a href='#about'onClick={()=>setActiveNav('#about')}className={activeNav==='#about' ? 'active':''}><SiAboutdotme/></a>
        <a href='#experience'onClick={()=>setActiveNav('#experience')}className={activeNav==='#experience' ? 'active':''}><BiUserCircle/></a>
        <a href='#services'onClick={()=>setActiveNav('#services')}className={activeNav==='#services' ? 'active':''}><MdMiscellaneousServices/></a>
        <a href='#contact'onClick={()=>setActiveNav('#contact')}className={activeNav==='#contact' ? 'active':''}><IoMdContact/></a>
        
    </nav>
  )
}

export default Nav