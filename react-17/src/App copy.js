import React from "react";
import Registration from "./Router/Registration";
import Login from "./FormHandling/Login"
import Counter from "./State/Counter";
import MsgBind from "./State/MsgBind";
import GalleryReact from "./React-Project/GalleryReact";
import Header from "./Properties/FunToClass/Header";
import User from "./Properties/ClassToFun/User";
import Navbar from "./State/Navbar";
import Message from "./State/Message";
function App() {
  return (
    <div>
      <Header/> 
       <User/> 

      <GalleryReact/>
      <Navbar/> 
      <Message/>
      <MsgBind/>
      <Counter/>
      <Login/>
       <Registration/> 
    </div>
  );
}

export default App;
