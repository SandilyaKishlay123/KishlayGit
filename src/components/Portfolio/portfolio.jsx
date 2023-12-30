import React from 'react';
import './portfolio.css';
import img1 from '../../assets/DM.jpg';
import img2 from '../../assets/frontend.png';
import img3 from '../../assets/backend.png';
import IMG2 from '../../assets/WD.jpg';
import IMG3 from '../../assets/DC.png'

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
          <article className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={img1} alt=""/>
                  </div>   
                    <h3>Data Display Using Django</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/SandilyaKishlay/-Option-Chain-Data-Display-using-Django/blob/master/README.md" className='btn'>Github</a>
                    <a href="#" className='btn btn-primary'>LiveDemo</a>
                    </div>
          </article>
          <article className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={img2} alt=""/>
                  </div>   
                    <h3>FrontEnd</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/SandilyaKishlay/MyRepo" className='btn'>Github</a>
                    <a href="#" className='btn btn-primary'>LiveDemo</a>
                    </div>
          </article>
          <article className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={img3} alt=""/>
                  </div>   
                    <h3>Scintific Axes</h3>
                    <div className="portfolio__item-cta">
                    <a href="https://github.com/SandilyaKishlay/Scientific-axes" className='btn'>Github</a>
                    <a href="#" className='btn btn-primary'>LiveDemo</a>
                    </div>
          </article>
         
      </div>
    </section>
  )
}

export default portfolio