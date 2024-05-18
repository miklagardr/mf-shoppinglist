import React from 'react'
import UserInfos from './UserInfos'
import { useState } from 'react'
import Navbar from "../components/Navbar";
import UserOrders from './UserOrders'
import UploadPhoto from './UploadPhoto'


function AdminPage() {
 
  return (
    <div>
      <Navbar/>
      <div>
        <UserInfos/>
      </div>
      <div>
        <UserOrders/>
      </div>
      <div>
        <UploadPhoto/>
      </div>
    
        
    </div>
  )
}

export default AdminPage