import React from 'react'
import poster from '../Assets/poster.jpg'
import Testimonial from './Testimonial'
import Goal from './Goal'
import Footer from './Footer'
import { Link } from "react-router-dom"

function handleonclick() {

}


const home = () => {

  return (
    <div>

      <div className="top-nav">
        <Link to="/Signin" className='top-signin'>Sign in</Link>
        <Link to="/Signup" className='top-signup'>Sign up</Link>
      </div>

      <div className="home-header">Landing template for startups</div>
      <p className="home-para">Our landing page template works on all devices, so you only have to set it up once, <br>
      </br> and get beautiful results forever.</p>

      <div className="home-btns">
        <div className="home-btn1">Start free trial</div>
        <div className="home-btn2">Learn more</div>
      </div>

      <div className="media">
        <img src='/Images/play.png' className='play' alt='play' onClick={handleonclick()}></img>
        <img src={poster} alt='poster' className='media-img1'></img>
        <video controls autoPlay className='media-vid1'>
          <source src='/Videos/vid1.mp4' />
        </video>
      </div>

      <Testimonial />
      <Goal />
      <Footer />



    </div>
  )
}


export default home
