import React from 'react';
import './services.css';
import {BsFillCheckCircleFill} from 'react-icons/bs';

function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Mining</h3>
          </div>
          <ul className='service__list'>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Exploratory analysis to uncover patterns and trends in datasets.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Utilizing algorithms to extract valuable information from large datasets.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Clustering techniques to segment data based on similarities.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Association and correlation analysis for relationship discovery.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Predictive modeling to forecast future trends or behaviors.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Evaluating data mining results for business or research insights.</p>
            </li>
        </ul>
        </article>
        {/*End of FirstCard */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Crafting tailored websites with HTML, CSS, JavaScript, and responsive design.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Enhancing user experience through UI/UX, CSS frameworks, and interactivity.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Building server logic, databases, and functionality with various frameworks.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Creating online stores, integrating payments, managing catalogs for businesses.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Building interactive, database-driven applications utilizing diverse frameworks and tools.</p>
            </li>
            <li>
                <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Providing ongoing updates, bug fixes, and technical support post-launch.</p>
            </li>
          </ul>
          
        </article>
        {/*End of FirstCard */}
        <article className="service">
          <div className="service__head">
            <h3>Data Cleaning</h3>
          </div>
          <ul className='service__list'>
    <li>
        <BsFillCheckCircleFill className='service__list-icon'/>
        <p>Identify and remove duplicate or redundant entries in datasets.</p>
    </li>
    <li>
        <BsFillCheckCircleFill className='service__list-icon'/>
        <p>Cleansing data by correcting errors, inconsistencies, or inaccuracies.</p>
    </li>
    <li>
        <BsFillCheckCircleFill className='service__list-icon'/>
        <p>Handling missing data through imputation or deletion strategies.</p>
    </li>
    <li>
        <BsFillCheckCircleFill className='service__list-icon'/>
        <p>Standardizing formats and values for uniformity and consistency.</p>
    </li>
    <li>
        <BsFillCheckCircleFill className='service__list-icon'/>
        <p>Normalization and transformation to meet analysis requirements.</p>
    </li>
    <li>
        <BsFillCheckCircleFill className='service__list-icon'/>
        <p>Validation processes to ensure data integrity and accuracy.</p>
    </li>
</ul>

          
        </article>
        {/*End of FirstCard */}
      </div>
    </section>
  )
}

export default services