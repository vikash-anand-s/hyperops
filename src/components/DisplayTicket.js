import React from "react";
import { details } from "./Booking";
import { formatTime } from "../utils";
import DateNtime from "./DateNtime";

//Page component
function DisplayTicket(){
    return (<div className="container">
        <h1>TICKET DETAILS</h1>
        <img className="qr"src= {require("/Users/vikash/Developer/JS/Basics/React/hyperopswebsite/src/qrCode.jpg")}/>
        <DateNtime />
        <h3>Your pod departs by {formatTime(details.time)}</h3>
    </div>);
}

export default DisplayTicket;