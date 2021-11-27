//send props Function to Function
import Footer from "./Footer";
let Header=()=>{
    let emp_Name= "prati";
    let emp_Sal= 45000;
    let image="https://static.toiimg.com/photo/msid-83163941/83163941.jpg?157263";

return(
    <div>
<Footer
     prop1={emp_Name}   
     prop2={emp_Sal}
     prop3={image} />
        
    </div>
);
};
export default Header;