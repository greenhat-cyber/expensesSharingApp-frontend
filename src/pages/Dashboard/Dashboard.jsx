import React from 'react'
import GroupCard from '../../components/groupCard/GroupCard'

const Dashboard = () => {
  const auth = localStorage.getItem('token')

  
  return (
    <div className='px-8 max-lg:px-2'>
        <div className='w-full border-b h-[3rem] mt-5'>
            <p className='font-bold text-2xl'>Your Groups</p>
        </div>

        <div className='grid grid-cols-4 max-lg:grid-cols-1 gap-3'>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
        </div>
    </div>
  )
}

export default Dashboard