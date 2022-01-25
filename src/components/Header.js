import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (<header>
        <h1>HYPEROPS</h1>
        <Link style={{color:"white", textDecoration:"none"}} to="/"><h2 id="userName" style={{marginLeft:"10px"}}></h2></Link>
    </header>
    );
}

export default Header;