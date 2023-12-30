import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

function experience() {
      return (
            <section id='experience'>
                  <h5>What Skills I have</h5>
                  <h2>My Experience</h2>

                  <div className="container experience__container">
                        <div className="experience__frontend">
                              <h3>Frontend Development</h3>
                              <div className="experience__content">
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>HTML</h4>
                                          <small className='text-light'>Experienced</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>CSS</h4>
                                          <small className='text-light'>Experienced</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Javascript</h4>
                                          <small className='text-light'>Intermediate</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>React.js</h4>
                                          <small className='text-light'>Intermediate</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Bootstrap</h4>
                                          <small className='text-light'>Experienced</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Jinja2</h4>
                                          <small className='text-light'>Experienced</small>

                                    </article>
                              </div>
                        </div>
                        <div className="experience__backend">
                              <h3>Backend Development</h3>
                              <div className="experience__content">
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Django</h4>
                                          <small className='text-light'>Intermediate</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>PHP</h4>
                                          <small className='text-light'>Begginer</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Mysql</h4>
                                          <small className='text-light'>Advance</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Git & GitHub</h4>
                                          <small className='text-light'>Intermediate</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Chat.js</h4>
                                          <small className='text-light'>Begginer</small>

                                    </article>
                                    <article className='experience_details'>
                                          <BsFillPatchCheckFill className='experience__details-icons' />
                                          <h4>Python</h4>
                                          <small className='text-light'>Experienced</small>

                                    </article>
                              </div>
                        </div>



                  </div>
            </section>
      )
}

export default experience