import React from "react";
class Message extends React.Component{
    state={
    msg:"Hello",
    }
    gmHandler=()=>{
        this.setState({
            msg:"Good Mornig"
        });
    }
        gaHandler=()=>{
     this.setState({
      msg: "Good Afternoon"
     });
     }
     gnHandler=()=>{
         this.setState(
             {
                 msg: "Good night"
             }
         )
     }
render(){
    return(
        <>
        <h1>{this.state.msg}</h1>
        <button className ="btn btn-primary" onClick={this.gmHandler}>GM</button>
        <button className ="btn btn-success" onClick={this.gaHandler}>GA</button>
        <button className ="btn btn-warning" onClick={this.gnHandler}>GN</button>
        </>
    );
}
}

export default Message;