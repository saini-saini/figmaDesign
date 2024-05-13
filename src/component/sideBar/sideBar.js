import React from 'react'
import './sideBar.css'
import homeIcon from "../images/home (1).png"
import usersIcon from "../images/multipleUsers.png"
import logOutIcon from "../images/right-arrow (1).png"

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className='sideBarTop'>
        <p className='sideBarparaText'>spiffTest</p>
        <ul>
          <li><img src={homeIcon} alt="" className='sideBarIcon' /><span className='sideBarText'>Home</span></li>
          <li className='active'><img src={usersIcon} alt="" className='sideBarIcon' /><span className='sideBarText'>Create/Edit User</span></li>
          <li><img src={logOutIcon} alt="" className='sideBarIcon' /><span className='sideBarText'>Logout</span></li>
        </ul>
      </div>

      <div className='sideBarBottom'>
        <p className='sideBarBottomParaText'>by</p>
        <img src="https://www.testright.in/images/logo.png" alt="" className='sideBarBottomLogo' />
      </div>
    </div>
  )
}

export default SideBar
