import React from 'react';
import './testimonial.css';
import IMG1 from "../../assets/IMG1.jpg";
import IMG2 from "../../assets/IMG2.jpg";
import IMG3 from "../../assets/IMG3.jpg";
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function testimonial() {
  return (
    <section id='section'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className="client__avtar">
            <img src={IMG1} alt="" />
          </div>
          <h5 className='clients__name'>Akash Sharma</h5>
            <small className='client_review'>Having known Sandilya closely, I can attest to his impressive development skills. We collaborated on a remarkable project—a dynamic travel recommendation platform. Using Flask for backend and Jinja2 for frontend, our collaboration was a testament to Sandilya's expertise and commitment. Working together on this innovative project was an absolute pleasure and a rewarding experience</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avtar">
            <img src={IMG2} alt="" />
          </div>
          <h5 className='clients__name'>Raghuveer kumar</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque commodi ea quos. Suscipit fugiat laudantium eveniet aut labore neque quo, soluta impedit voluptate id rerum quaerat corporis! Quasi officiis dolorum deleniti illum? Sit vero aliquid officiis quos rem quia ex reprehenderit commodi, ducimus architecto laboriosam, explicabo debitis, consequatur possimus enim?</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avtar">
            <img src={IMG3} alt="" />
          </div>
          <h5 className='clients__name'>Harry Potter</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque commodi ea quos. Suscipit fugiat laudantium eveniet aut labore neque quo, soluta impedit voluptate id rerum quaerat corporis! Quasi officiis dolorum deleniti illum? Sit vero aliquid officiis quos rem quia ex reprehenderit commodi, ducimus architecto laboriosam, explicabo debitis, consequatur possimus enim?</small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default testimonial