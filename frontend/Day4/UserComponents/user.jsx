import React from 'react'
import Navbar from '../NavComponents/Navbar'
import './user.css'
import Image from '../loginpage.jpg';
function user() {
  return (
    <div>
    <Navbar/>
    <img src={Image} width="1300" height="700px" style={{marginTop:"-700px", marginLeft:"-30px"}}/>
    <div className='userbg'></div>
    </div>
  )
}

export default user