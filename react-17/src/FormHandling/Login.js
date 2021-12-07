import React, { Component } from 'react'

class Login extends Component {
    state={
        email: "",
        password:""
    }
    updateHandler=(event)=>{
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    submitHandler=(event)=>{
        console.log(this.state);
     event.preventDefault();
    };
    render() {
        return (
            <>
            <div className="container" onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="col md-5">
                     <form className="form-group">
                      {/* <label>User</label> */}
                      <input type="text" placeholder="user name" onChange={this.updateHandler} name="email"/><br/>
                        {/* <label>Password</label> */}

                      <div className="form-group">
                         <input type="text" placeholder="password" onChange={this.updateHandler} password="password"/><br/>
                         </div>
                         <input type="submit" placeholder="submit"/>
                     </form>
                     <hr/>
                       <pre>{JSON.stringify(this.state)}</pre> 
                    </div>
                </div>
            </div>


            
            </>
        )
    }
}

export default Login;
