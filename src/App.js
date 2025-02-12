import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Introduction from "./components/Introduction";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignupSuccess from "./components/SignupSuccess";
import Content from "./components/Content";
import Profile from "./components/Profile";
import PrivacyPolicy from "./components/Privacy";

import Settingss from "./components/Settings";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} /> 
        <Route path="/introduction" element={<Introduction />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signupsuccess" element={<SignupSuccess />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route  inde path="/content" element={<Content />} />
        <Route  inde path="/privacy" element={<PrivacyPolicy />} />
        <Route  inde path="/settings" element={<Settingss />} />
         
      </Routes>
    </Router>
  );
};

export default App;
