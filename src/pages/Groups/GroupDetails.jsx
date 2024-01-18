import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import ActiveExpenses from './components/ActiveExpenses'
import SettledExpenses from './components/SettledExpenses'

const GroupDetails = () => {

    const tabs = [
        {
            id: 1,
            name: "Active",
            component: <ActiveExpenses />,
        },
        {
            id: 2,
            name: "Settled",
            component: <SettledExpenses />,
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const navigate = useNavigate()

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

    return (
        <div className="px-8 max-lg:px-2">
            <div className="w-full flex items-center gap-2 text-gray-600 mt-4">
                <p className="cursor-pointer" onClick={() => navigate("/dashboard")}>
                    Home
                </p>
                <IoIosArrowForward />
                <p className="cursor-pointer" onClick={() => navigate("/groups")}>Group</p>
                <IoIosArrowForward />
                <p className="cursor-pointer text-primary">Group Details</p>
            </div>

            <div className="w-full h-[3rem] mt-2 flex items-center justify-between">
                <p className="font-bold text-2xl">Groups Name</p>
                <button
                    className="bg-primary w-[13%] max-lg:w-[40%] max-lg:text-sm h-[5vh] rounded-md flex items-center justify-center gap-2 text-white text-sm"
                >
                    <AiOutlinePlusCircle size={18} /> Add Expenses
                </button>
            </div>
            <div className='mt-2'>
                <p className='uppercase text-gray-400 text-[11px] tracking-wider'>Expenses List</p>
            </div>
            <div className='w-full grid grid-cols-2'>
                <div className='w-full h-[50vh] mt-3'>
                    <div className='w-full flex gap-6'>
                        {tabs.map((tab) => (
                            <span
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className={`font-medium cursor-pointer ${activeTab === tab.id ? 'text-primary border-b-2 border-b-primary' : 'text-gray-500'
                                    }`}
                            >
                                {tab.name}
                            </span>
                        ))}
                    </div>
                    <div className="w-full mt-4">{tabs.find((tab) => tab.id === activeTab)?.component}</div>
                </div>
                {/* <div className='bg-red-500 w-full h-[50vh]'>

                </div> */}
            </div>
        </div>
    )
}

export default GroupDetails