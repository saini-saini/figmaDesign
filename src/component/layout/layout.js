import React from 'react'
import NavBar from '../navBar/navBar'
import './layout.css'
import SideBar from '../sideBar/sideBar'
import Main from '../main/main'

const Layout = () => {
  return (
    <div className='layout'>
      <div className='layoutnavBar'>
        <NavBar />
      </div>

      <div className='layoutcontainer'>
        <div className='layoutsideBar'>
          <SideBar />
        </div>
        <div className='layoutmain'>
          <Main />
        </div>
      </div>
      
    </div>
  )
}

export default Layout
