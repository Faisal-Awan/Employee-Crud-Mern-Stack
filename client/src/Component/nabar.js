import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";


 
const Navbar = () => {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
        Home
       </NavLink> 
       <div>
         <ul className="navbar-nav" >
           <li className="nav-item">
             <NavLink className="nav-link"  to="/create">
               Create Record
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}
export default Navbar;