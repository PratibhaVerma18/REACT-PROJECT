import React, { Component } from 'react'
import axios from 'axios';

 class User2 extends Component {
     constructor(props){
         super(props);
         this.state={okkk:[]};
         console.log("first");

     }
     componentDidMount=(()=>{
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((response)=>{
          this.setState({okkk:response.data});
         })
        .catch();
        console.log("third-componentDidMount");
     })
     componentWillUnmount=(()=>{
         console.log("last componentWillUnmount");
     })
    render() {
        console.log("second render");
        return (
            <div>
                <h1>component life cycle</h1>
            </div>
        )
    }
}

export default User2
