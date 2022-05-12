import React from "react"
import Banner from '../../img/main-banner.png'
import Banner2 from '../../img/main-banner2.jpg'



import './Intro.css'

const Intro = props => {
    const changeSlide = (event) => {
        const firstImage = document.querySelector('.img-1')
        const secImage = document.querySelector('.img-2')
        const slideNum = document.querySelector('.slide-num')

        const classes = [...event.target.classList]
        if(classes[0] === 'prev-slide'){
            secImage.style.display = 'none'
            firstImage.style.display = 'block'
            slideNum.textContent = '01'
        }else if(classes[0] === 'next-slide'){
            secImage.style.display = 'block'
            firstImage.style.display = 'none'
            slideNum.textContent = '02'
        }
    }

    return(
        <div className="intro-sect flex">
            <div className="left-side">
                <h1>
                    <span className="hammer-font">PROJECT</span>
                    <span  className="hammer-font">Nurtown</span>
                </h1>

                <div className="slider-buttons">
                    <div>
                        <button className="prev-slide bx bx-left-arrow-alt" onClick={event => changeSlide(event)}></button>
                        <button className="next-slide bx bx-right-arrow-alt" onClick={event => changeSlide(event)}></button>
                    </div>
                </div>

                <div className="slide-number">
                    <span className="slide-num hammer-font">01</span>
                    <span className="hammer-font">/</span>
                    <span className="hammer-font">02</span>
                </div>
            </div>

            <div className="right-side">
                <img className="img-1" src={Banner} alt="" />
                <img className="img-2" src={Banner2} alt="" />
                <button>Look at!!</button>
            </div>

        </div>
    )
}

export default Intro