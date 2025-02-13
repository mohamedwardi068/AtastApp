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
import Atast from "./components/Atast";
import Saved from "./components/Saved";
import SearchBar from "./components/SearchBar";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";




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
        <Route path="/settings" element={<Settingss/>} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route  inde path="/searchbar" element={<><SearchBar /><Footer/></>} />
        <Route  inde path="/search" element={<><SearchPage /><Footer/></>} />
        <Route  inde path="/saved" element={<><Saved /><Footer/></>} />
        <Route  inde path="/atastss" element={<Atast />} />
        <Route  inde path="/content" element={<> <Navbar /><Content /><Stories /><Posts /><Footer/></>} />
         
      </Routes>
    </Router>
  );
};

export default App;
