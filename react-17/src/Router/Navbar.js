
            import { Link } from "react-router-dom";
            let Navbar = () => {
         return (
          <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="home">
          React Routing - 6 V
        </Link>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="CompA">
                State Ex
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="propsEx">
                Props Ex
              </Link>
            </li>
           <li className="nav-item">
               <Link className="nav-link" to="Registration">Registration</Link>
               <li className= "nav-item">
              <Link className="nav-link" to="User">User</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link" to="user2">user2</Link>
               </li>
           </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
            