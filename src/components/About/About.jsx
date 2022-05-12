import React from 'react'
import './About.css'
import About1 from '../../img/about-img1.png'
import About2 from '../../img/about-img2.png'
import About3 from '../../img/about-img3.png'

function About() {
  return (
    <div className='about flex'>
        <div className='box-parent'>
            <div className='first-box-img'>
                <img src={About1} alt="" />
                <img src={About2} alt="" />
            </div>
            <div className='second-box-img'>
                <img src={About3} alt="" />
            </div>
        </div>



        <div className='text-parent'>
            <h1>
                About company
            </h1>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <button>
                READ <i className='bx bx-right-arrow-alt'></i>
            </button>
        </div>
    </div>
  )
}

export default About