import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Addgroup from "./Addgroup";

const Groups = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <Addgroup isModalOpen={isModalOpen} openModal={openModal} />
      <div className="px-8 max-lg:px-2">
        <div className="w-full flex items-center gap-2 text-gray-600 mt-4">
          <p className="cursor-pointer" onClick={() => navigate("/dashboard")}>
            Home
          </p>
          <IoIosArrowForward />
          <p className="cursor-pointer text-primary">Group</p>
        </div>
        <div className="w-full h-[3rem] mt-2 flex items-center justify-between">
          <p className="font-bold text-2xl">Your Groups</p>
          <button
            onClick={openModal}
            className="bg-primary w-[13%] max-lg:w-[40%] max-lg:text-sm h-[5vh] rounded-md flex items-center justify-center gap-2 text-white text-sm"
          >
            <AiOutlinePlusCircle size={18} /> Add Group
          </button>
        </div>
        <div className="w-full mt-4">
          <table className="w-full min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-slate-200 text-gray-900">
                <th className="py-2 px-4">Id</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Members</th>
                <th className="py-2 px-4">Total Expenses</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 text-center">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Bill</td>
                <td className="py-2 px-4">june's expenses</td>
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">5</td>
                <td className="py-2 px-4 flex items-center justify-center gap-1 text-primary cursor-pointer" onClick={()=>navigate("/groups/groupsdetails")}>
                  <p className="text-sm">Open</p>
                  <IoIosArrowForward />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Groups;
