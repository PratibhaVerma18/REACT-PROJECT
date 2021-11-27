//sending props class to function

import React from "react";
import Layout from"./Layout";
class User extends React.Component{
    UserName={
        name: "parti",
        salary: 45000,
        image: "https:static.toiimg.com/photo/msid-83163941/83163941.jpg?157263"
    }
    
    render(){
        return(
            <>
<Layout  employee={this.UserName}
/>
            </>
        );

        
    }
}
export default User;
