import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(<div>
        <Link to="/Booking"><button>Booking page</button></Link>
        <Link to="/SignIn"><button>Sign in</button></Link>
    </div>);
}

export default Home;