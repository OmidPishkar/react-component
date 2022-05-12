import React from 'react'
import FooterLogo from '../../img/footer-logo.png'
import './Footer.css'

const Footer = () => {
return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-main'>
                <div className='logo-parent'>
                    <img src={FooterLogo} alt="" />
                </div>

                <div className='info-parent'>
                    <ul>
                        <h1>Information</h1>
                        <li>
                            Home
                        </li>
                        <li>
                            Gallery
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Certificates
                        </li>
                        <li>
                            Contacts
                        </li>
                    </ul>
                </div>

                <div className='contact-parent'>
                    <ul>
                        <h1>Contact</h1>
                        <li>
                            <i className='bx bx-current-location'></i>100000, Iran,Tehran, st 021
                        </li>
                        <li>
                            <i className='bx bx-phone'></i> +98 901 031 0040
                        </li>

                        <li>
                            <i className='bx bxs-envelope'></i> omidjr17@gmail.com
                        </li>
                    </ul>
                </div>
                
                <div className='social-parent'>
                    <h1>Social Medials</h1>
                    <ul>
                        <li className='bx bxl-facebook'></li>
                        <li className='bx bxl-twitter'></li>
                        <li className='bx bxl-linkedin'></li>
                        <li className='bx bxl-instagram'></li>
                    </ul>
                </div>
            </div>

            <div className='hr'></div>

            <p className='end-paraph'>
                © 2019 Digital Project. All rights reserved.
            </p>
        </div>
    </div>
  )
}
export default Footer