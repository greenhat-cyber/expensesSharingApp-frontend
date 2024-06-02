import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const sideBarData = [
        {
            name: "Home",
            path: "/dashboard",
            icon: <AiFillHome size={20} />,
        },
        {
            name: "Groups",
            path: "/groups",
            subPath: "/groups/groupsdetails",
            icon: <MdGroups size={20} />,
        },
    ];
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className="w-[20%] h-screen border-r fixed max-lg:hidden">
            <div className="w-full h-[4rem] flex items-center justify-center">
                <p className="font-bold text-[20px] text-slate-500">
                    <span className="text-primary">Expense</span> Sharing
                </p>
            </div>
            <div className="w-full px-4 mt-4">
                {sideBarData.map((items, idx) => {
                    return (
                        <div key={idx} onClick={() => navigate(items.path)} className={`transition-all ease-in-out duration-[.3s] w-full h-[3rem] flex items-center justify-start px-4 gap-2 rounded-md font-semibold cursor-pointer mb-2 ${location.pathname === items.path || (items.subPath && location.pathname === items.subPath) ? "bg-primary text-white" : "text-gray-700 hover:bg-slate-100"}`}>
                            {items.icon}
                            <p>{items.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
