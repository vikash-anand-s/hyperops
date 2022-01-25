import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (<header>
        <img src={require("/Users/vikash/Developer/JS/Basics/React/hyperopswebsite/src/hyperloop.png")} style={{height:"100px", width:"110px", float:"right"}}/>
        <h1>HYPEROPS</h1>
        <Link style={{color:"white", textDecoration:"none"}} to="/"><h2 id="userName" style={{marginLeft:"10px"}}></h2></Link>
    </header>
    );
}

export default Header;