//sending props Function to class


import React from "react";
class Footer extends React.Component{
    
render(){
    // let{name,sal}= this.props;
    return (
    <>
<pre>{JSON.stringify(this.props)}</pre>
<h1> Name:{this.props.name}</h1>
<h2>Salary:{this.props.sal}</h2>
{/* <h4>empolyee name  {name}</h4>
<h5>empolyee salary  {sal}</h5> */}
    </>
    )
}
}
export default Footer;