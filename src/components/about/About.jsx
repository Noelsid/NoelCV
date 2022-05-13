import React from 'react'
import "./about.css";
import Illustration from "../../assets/bg-img.png";
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Illustration} alt="illustration" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>
          <p>Web developer with design and efficient funtionality insights with strong understanding to 
            the core concepts of frameworks used and implemented. I also give more importance to the user
             experience aspect of the website developed.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>


    </section>
  )
}

export default About