import React from "react";
import { formatDate, formatTime } from "../utils";
import { details } from "./Booking";

function DateNtime(){
    return (<div>
        <h2>DATE: {formatDate(details.date)}</h2>
        <h2>TIME: {formatTime(details.time)}</h2>
    </div>);
}

export default DateNtime;