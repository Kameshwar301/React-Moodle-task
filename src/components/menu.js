import React from "react";
import { Link } from "react-router-dom";

export function Menu(){
    return(
        <>
        <header>
            <nav className="menuNav">
        <ul>
          <Link to='/'>  <li>Home</li> </Link>
           <Link to='/superover'> <li>Super Over</li> </Link>
           <Link to='/socialButtons'><li>Social Buttons</li></Link>
           <Link to='/notification'><li>Notification</li></Link>
           <Link to='/login'><li>Login</li></Link>
           <Link to='/technology'><li>Technology</li></Link>
        </ul>
        </nav>
        </header>
        </>
    );
}