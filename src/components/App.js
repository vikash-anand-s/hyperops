import React from "react";
import {Route, Routes} from 'react-router-dom';
import Header from "./Header";

import Booking  from "./Booking";
import FinalScreen from "./FinalScreen";
import Home from "./Home";
import DisplayTicket from "./DisplayTicket";
import Authenticate from "./Authenticate";


function App(){
    return(<div>
        <Header />
        <Routes>
            <Route path="/" element={<Authenticate />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Seats" element={<FinalScreen />} />
            <Route path="/Ticket" element={<DisplayTicket />} />
            <Route path="*" element={<Authenticate />} />
        </Routes>
        <br /><br />
        <div className="container" style={{marginBottom: "20px"}}>
            <footer><p>©SHARMADA x VIKASH</p></footer>
        </div>
    </div>);
}

export default App;