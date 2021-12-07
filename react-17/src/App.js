import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompA from "./Router/CompA";
import Navbar from "./Router/Navbar";
import PropsEx from "./Router/PropsEx";
import Registration from "./Router/Registration";
import User from "./Router/User";
import User2 from "./Router/User2";

function App() {
  return (
    <>
       <Router>
        <Navbar />
        <Routes>
          
          <Route path="/propsex" element={<PropsEx />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/compa" element={<CompA/>} />
          <Route path="/user" element={<User/>}/>
          <Route path="/user2" element={<User2/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
