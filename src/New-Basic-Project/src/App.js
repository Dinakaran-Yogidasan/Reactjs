
import React from "react";
import { Route, Routes } from "react-router-dom";
import SiginIn from "./Component/Dashboard/SignIn";
import SignUp from "./Component/Dashboard/SignUp";
import Dashboard from "./Component/Dashboard/Dashboard";
import BasicTable from "./Component/Dashboard/BasicTable";
import AddProduct from "./Component/Dashboard/AddProduct";
import Flag from "./Component/Dashboard/Flag";
import CustomTable from "./Component/Table/CustomTable";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SiginIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<BasicTable />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/flag" element={<Flag />} />
        <Route path="/custom" element={<CustomTable />} />
      </Routes>
    </div>
  );
};

export default App;