import nextDate from "../utils";
import timings from "../Data/timings";
import TimingButton from "./TimingButton";

import {Link} from 'react-router-dom';
import { useState } from "react";

//variable to keep track of time slot and date
var details = {date:"", time:""};

//Booking page
function Booking(){
    const [active, setActive] = useState(true);

    function onClickButtonDate(events){
        const id = events.target.id;
        details.date = events.target.name;
        if(!(details.date === "" || details.time === "")){
            setActive(false);
            console.log("Next");
        }
    }

    function onClickButtonTime(events){
        const id = events.target.id;
        details.time = events.target.value;
        if(!(details.date === "" || details.time === "")){
            setActive(false);
            console.log("Next");
        }
    }

    return <div className="body">
        <h1 style={{marginLeft:"50px", color:"black"}}>BOOK TICKETS:</h1>
        <div className="date-buttons">
            <h2>DATE</h2>
            <button id="1" name = {nextDate(1, '')} onClick={onClickButtonDate} value={nextDate(1)}>{nextDate(1)}</button>
            <button id="2" name = {nextDate(2, '')} onClick={onClickButtonDate} value={nextDate(2)}>{nextDate(2)}</button>
            <button id="3" name = {nextDate(3, '')} onClick={onClickButtonDate} value={nextDate(3)}>{nextDate(3)}</button>
        </div>

        <br />
        <br />
        <hr />
        <br />

        <div className="time-buttons">
            <h2>TIME</h2>
            {timings.map((timing) => {
                return <TimingButton key={timing.id} onClick={onClickButtonTime} value={timing.value} text={timing.text}/>;
            })}
        </div>
        <div className="nextButtondiv">
            <Link to='/Seats'><button disabled = {active} className="submitButton">NEXT</button></Link>
        </div>
    </div>;
}

export default Booking;
export {details};
