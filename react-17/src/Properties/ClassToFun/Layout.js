let Layout=(props)=>{
    return(
        <>
        <h1>hhh</h1>
        <img src={props.employee.image}/>
        <h2>Name:{props.employee.name}</h2>
        <h3>Salary:{props.employee.salary}</h3>
        </>
    );
}
export default Layout;