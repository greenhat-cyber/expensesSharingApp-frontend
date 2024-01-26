import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const Default = () => {
  let auth = localStorage.getItem("token");

  const navigate = useNavigate()

  useEffect(() => {
    if (!auth) {
      navigate("/signin")  
    }else{
      navigate("/dashboard")  
    }
  }, [])

  return (
    <div className="flex">
      <Sidebar/>
      <main className="min-w-[100%] pl-[20%] max-lg:pl-0 max-lg:min-w-0">
        <Header/>
        {auth ? <Outlet/> : <Navigate to="/signin"/>}
      </main>
    </div>
  );
};

export default Default;
