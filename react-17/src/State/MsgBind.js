import React from 'react';

 class MsgBind extends React.Component{
  state={
    msg: "Hello",
  }
  updateMsgHandler=(value)=>{
      console.log(value);
      this.setState({
          msg: value
      });
  };

    render() {
        console.log("its working")
        return (
            <>
               <h1>{this.state.msg}</h1> 
               <button className="btn btn-success" onClick={this.updateMsgHandler.bind(this,"good Morning")}>GM</button>
               <button className="btn btn-warning" onClick={this.updateMsgHandler.bind(this,"good afternoon")}>GA</button>
               <button className="btn btn-primary" onClick={this.updateMsgHandler.bind(this,"good night")}>GN</button>
            </>
        );
    }
}

export default MsgBind;
