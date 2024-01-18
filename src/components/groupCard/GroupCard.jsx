import React from 'react'

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { TbExternalLink } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';




const GroupCard = () => {

    const navigate = useNavigate()

  return (
    <div className='border-2 w-full h-auto mt-4 px-5 py-4 rounded-md'>
        <div className='border-b flex flex-col gap-2 pb-3'>
            <p className='text-2xl font-bold'>June 2022</p>
            <p className='text-sm text-gray-700'>June's expenses</p>
        </div>
        <div className='flex flex-col gap-4 py-5'>
            <span className='flex items-center justify-start gap-2'>
                <FaRegMoneyBillAlt size={20} className='text-primary'/>
                <p className='font-semibold text-gray-700'>Total Expenses : <span className='text-black'>5</span></p>
            </span>
            <span className='flex items-center justify-start gap-2'>
                <HiUsers size={20} className='text-primary'/>
                <p className='font-semibold text-gray-700'>Members : <span className='text-black'>5</span></p>
            </span>
        </div>
        <div className='w-full h-[3vh] flex items-center justify-end gap-2 text-primary font-semibold' onClick={()=>navigate("/groups/groupsdetails")}>
            <p className='text-sm cursor-pointer'>Open</p>
            <TbExternalLink size={20} className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default GroupCard