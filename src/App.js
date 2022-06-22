import "./App.css";

import Login from "./components/Login/Login.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import Form from "./components/Form/Form.jsx";
import { Routes, Route, Navigate, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import Header from "./components/Header/Header";
import AntExample from "./components/AntExample/Dropdown.jsx";
import TablePage from "./components/TablePage/DemoPage.jsx";
import ProgressDemo from "./components/ProgressDemo/ProgressDemo.jsx";
import Company from "./components/RajDesign/Company.jsx";
import Benz from "./components/Rajdesign-2/Benz.jsx";
import Comment from "./components/APIform/Api";
import APItable from "./components/APItable/APItable.jsx"
import APIform from "./components/APIFORM-2/APIform";

// import { useEffect, useState } from "react";

function App() {
  // const [userDetails, setUserDetails] = useState("");
  // useEffect(() => {
  //   const data = localStorage.getItem("user");
  //   console.log(data);
  //   setUserDetails(JSON.parse(data));
  // }, []);
  // const logout = () => {
  //   localStorage.clear();
  //   Navigate("/");
  // };
  // const content = (
  //   <div>
  {
    /* <p onClick={() => logout()} className={styles.Popover}>logout</p> */
  }
  //   </div>
  // );
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/form" element={<Form />} />

        <Route path="/example" element={<AntExample />} />

        <Route path="/table" element={<TablePage />} />

        <Route path="/progress" element={<ProgressDemo />} />

        <Route path="/company" element={<Company />} />

        <Route path="/benz" element={<Benz />} />

        <Route path="/comment" element={<Comment />} />

        <Route path="/component" element={<APItable />} />

        <Route path="/apiform" element={<APIform />} />

      </Routes>
    </div>
  );
}

export default App;
