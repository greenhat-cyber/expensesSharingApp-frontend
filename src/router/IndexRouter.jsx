import React from "react";
import { Route, Routes } from "react-router-dom";
import Default from "../layout/Default";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Groups from "../pages/Groups/Groups";
import GroupDetails from "../pages/Groups/GroupDetails";

const IndexRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Default />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/groupsdetails" element={<GroupDetails />} />
      </Route> */}
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default IndexRouter;
