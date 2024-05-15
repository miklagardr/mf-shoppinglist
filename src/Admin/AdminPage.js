import React from 'react'
import UserInfos from './UserInfos'
import { useState } from 'react'
import Navbar from "../components/Navbar";
import { IoIosArrowDown  , IoIosArrowUp} from "react-icons/io";

function AdminPage() {
  const [modal , setModal] = useState(false) 
  const handleOpenModal = () => {
    setModal(!modal) 
  }
  return (
    <div>
      <Navbar/>
      <div className='border bg-gray-100 p-5 flex justify-between mb-4' onClick={handleOpenModal}>
        <div></div>
        <h2 className='text-xl text-center'>User Informations</h2>
        <div className='text-3xl'>
          {!modal ? <IoIosArrowUp/> : <IoIosArrowDown/> }
        </div>
        
      </div>
      {
        modal && 
        <UserInfos/>
      }
        
    </div>
  )
}

export default AdminPage