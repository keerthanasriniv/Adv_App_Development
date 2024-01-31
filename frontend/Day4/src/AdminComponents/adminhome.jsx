import React from 'react'
import AdminNav from '../NavComponents/AdminNav';
import Image from '../admin.jpg';
function adminhome() {
  return (
    <div>
    <AdminNav/>
    <img src={Image} width="1300" height="700px" style={{marginTop:"-700px", marginLeft:"-30px"}}/>
    </div>
  )
}

export default adminhome