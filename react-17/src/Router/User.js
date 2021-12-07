import React, { Component } from 'react'

import axios from 'axios';

export class User extends Component {
    state={
        user:[]

    }
     getHandler=(()=>{
        
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
this.setState({user:response.data});
        })
        .catch((error)=>{

        })
    })
    render() {
        return (
            <>
               <h1>Displaying Data</h1> 
               <pre>{JSON.stringify(this.state.user)}</pre>
               <button className="btn btn-primary" onClick={this.getHandler}>Get Data</button>
               <hr />
        {this.state.user.map((user) => {
          return  <h1>{user.title} </h1>
        })}
            </>
        )
    }
}

export default User

