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
        <Routes path="/">
            <Route path="/" element={<Authenticate />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Seats" element={<FinalScreen />} />
            <Route path="/Ticket" element={<DisplayTicket />} />
        </Routes>
    </div>);
}

export default App;