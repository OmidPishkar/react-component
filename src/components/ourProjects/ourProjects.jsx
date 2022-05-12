import React from 'react'

import Project1 from '../../img/project-1.png'
import Project2 from '../../img/project-2.png'
import Project3 from '../../img/project-3.png'
import Project4 from '../../img/project-4.png'
import Project5 from '../../img/project-5.png'

import './ourProjects.css'

const Projects = () => {
  return (
    <div className='our-project'>
      <h1 className='title'>Our Projects</h1>

      <div className='parent-project'>

        <div className='project-show first-project'>
          <img src={Project1} alt="" />
          <div className='details'>
            <h1>RECREATION<br/>CENTER</h1>
            <a href='./'>LEARN MORE <span className='bx bx-right-arrow-alt'></span></a>
          </div>
        </div>

        <div className='project-show sec-project'>
          <img src={Project2} alt="" />
          <div className='details'>
            <h1>RECREATION<br/>CENTER</h1>
            <a href='./'>LEARN MORE <span className='bx bx-right-arrow-alt'></span></a>
          </div>
        </div>
        
      </div>


      <div className='parent-project'>

        <div className='third-project project-show'>
          <img src={Project3} alt="" />
          <div className='details'>
            <h1>RECREATION<br/>CENTER</h1>
            <a href='./'>LEARN MORE <span className='bx bx-right-arrow-alt'></span></a>
          </div>
        </div>
        
        <div className='fourth-project project-show'>
          <img src={Project4} alt="" />
          <div className='details'>
            <h1>RECREATION<br/>CENTER</h1>
            <a href='./'>LEARN MORE <span className='bx bx-right-arrow-alt'></span></a>
          </div>
        </div>
        
        <div className='fifth-project project-show'>
          <img src={Project5} alt="" />
          <div className='details'>
            <h1>RECREATION<br/>CENTER</h1>
            <a href='./'>LEARN MORE <span className='bx bx-right-arrow-alt'></span></a>
          </div>
        </div>
      
      </div>

      <button className='show-all'>
        ALL PROJECTS
      </button>

    </div>
  )
}
export default Projects