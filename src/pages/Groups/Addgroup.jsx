import React from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const Addgroup = (props) => {
  
  const navigate = useNavigate()

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#4299e1"
        : state.isFocused
        ? "#90cdf4"
        : "white",
      color: state.isSelected ? "white" : "black",
    }),
    control: (provided, state) => ({
      ...provided,
      border: ".3px solid #e2e8f0",
      borderRadius: "0.375rem",
      borderColor: state.isFocused ? "#6528F7" : "#e2e8f0",
      boxShadow: state.isFocused ? "0 0 0 2px #6528F7" : "none",
    }),
  };
  return (
    <div className="container mx-auto mt-8">
      {/* Modal */}
      {props?.isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50 cursor-pointer"
            onClick={props?.openModal}
          ></div>
          <div className="bg-white p-8 rounded z-10 w-[50%]">
            <h3 className="text-2xl font-semibold">Add Group</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div>
                <div className="w-full flex items-start justify-center flex-col gap-3">
                  <p className="text-gray-700 text-sm">GroupName</p>
                  <input
                    className="w-full h-[2.5rem] border pl-4 focus:outline-primary"
                    placeholder="Enter Group Name"
                  />
                </div>
                <div className="w-full flex items-start justify-center flex-col gap-3 mt-3">
                  <p className="text-gray-700 text-sm">Description</p>
                  <input
                    className="w-full h-[2.5rem] border pl-4 focus:outline-primary"
                    placeholder="Enter Group Description"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex items-start justify-center flex-col gap-3">
                  <p className="text-gray-700 text-sm">Add Members</p>
                  <Select
                    isMulti
                    options={options}
                    className="w-full h-[2.5rem] border focus:border-primary"
                    classNamePrefix="select"
                    styles={customStyles}
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[11vh] flex items-center justify-center flex-col gap-3 mt-4">
              <button className="w-[40%] h-[6vh] rounded-md bg-primary text-white" onClick={()=>navigate("/groups/groupsdetails")}>
                Create Groups
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addgroup;
