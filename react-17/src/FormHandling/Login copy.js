import React, { Component } from 'react'

class Login extends Component {
    state={
        email: "",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    passwordHandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    submitHandler=(event)=>{
        console.log(this.state);
     event.preventDefault();
    }
    render() {
        return (
            <>
            <form onSubmit={this.submitHandler}> 
                <label>Email</label>
                <input type="text" placeholder="Email id" onChange={this.emailHandler}></input><br/>
                <label>password</label>
                <input type="text" placeholder="password" onChange={this.passwordHandler}></input><br/><br/>
                
                <input type="submit"  value="Login..."/>
                <hr/>
        <pre>{JSON.stringify(this.state)}</pre>
            </form>
            </>
        )
    }
}

export default Login;
