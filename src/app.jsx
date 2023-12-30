import React from 'react';
import Header from './components/Header/header' ;
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Services from './components/services/services';
import Portfolio from './components/Portfolio/portfolio';
import Testimonials from './components/Testimonial/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/Footer/footer';





const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default app