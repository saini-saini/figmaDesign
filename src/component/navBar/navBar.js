import React from 'react'
import './navBar.css'
import menuIcon from "../images/menu (1).png"
const NavBar = () => {
    return (
        <div className='navBar'>
            <p className='navBarparaText'>MB<span>scan</span></p>
            <img src={menuIcon} alt="menuIcon" className='menuIcon' />
        </div>
    )
}

export default NavBar
