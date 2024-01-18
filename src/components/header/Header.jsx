import React, { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';




const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const storedUserInfo = localStorage.getItem("user-info");
    const userInfo = JSON.parse(storedUserInfo);

    const navigate = useNavigate()

   const handleLogOut =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user-info")
    navigate("/signin")
   }

  return (
    <div className='w-full h-[4rem] border-b flex items-center justify-end px-8'>
        <div className='flex items-center justify-center gap-2 cursor-pointer' onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>
            <p className='font-medium text-sm leading-4'>Hi,{userInfo?.name}</p>
            <IoIosArrowDown/>
        </div>
        <div className={`${isDropdownOpen ? "translate-y-0" : "-translate-y-[190px] opacity-100"} transform transition-all ease-in-out duration-[.3s] w-[15%] h-auto py-4 bg-white border absolute top-[4rem] rounded-md flex items-center justify-center flex-col`}>
            <div onClick={handleLogOut} className='w-full h-[6vh] hover:bg-slate-200 flex items-center justify-start pl-7 gap-2 text-gray-500 cursor-pointer border-b'>
                <MdLogout/>
                <p className='text-sm'>Log Out</p>
            </div>
            <div className='w-full h-[6vh] hover:bg-slate-200 flex items-center justify-start pl-7 gap-2 text-gray-500 cursor-pointer border-b'>
                <BsFillPersonFill size={18}/>
                <p className='text-sm'>Profile</p>
            </div>
        </div>
    </div>
  )
}

export default Header