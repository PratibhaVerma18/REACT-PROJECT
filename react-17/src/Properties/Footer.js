let Footer=(props)=>{


return(
    <div>
        <pre>{JSON.stringify(props)}</pre>
     
        <h1>emp_Name:{props.prop1}</h1>
        <h2>emp_Sal:{props.prop2}</h2>
       <h3><img src={props.prop3} alt="" /></h3>
    </div>
)
}
export default Footer;
