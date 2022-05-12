import React from 'react'
import Brand from '../../img/brand.png'
import './Navbar.css'

const Navbar = props => {
    const toggleMenu = () =>{
        const menuList = document.querySelector('.nav-list') 
        const body = document.body
        body.classList.toggle('menu-active')
        menuList.classList.toggle('active')
    }

    return(
        <React.Fragment>
            <nav className='navbar'>
                <img src={Brand} alt='Logo Brand'/>

                <ul className='nav-list'>
                    <li>
                        <a href="./" className='nav-link'>Home</a>
                    </li>
                    <li>
                        <a href="./" className='nav-link'>Gallery</a>
                    </li>
                    <li>
                        <a href="./" className='nav-link'>Proejcts</a>
                    </li>
                    <li>
                        <a href="./" className='nav-link'>CERTIFICATES</a>
                    </li>
                    <li>
                        <a href="./" className='nav-link'>CONTACTS</a>
                    </li>
                </ul>

                <button onClick={toggleMenu} id='toggle-menu' href="./">
                    <i className='bx bx-menu'></i>
                </button>
            </nav>
        </React.Fragment>
    )
}

export default Navbar