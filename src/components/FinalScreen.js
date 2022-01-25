import React, { useState } from "react";
import {details} from "./Booking";

import { bookTicket, getNoFilled } from "../firebaseFunctions";
import { Link } from "react-router-dom";
import DateNtime from "./DateNtime";

const noOfSeats = 25;

//Final Screen
function FinalScreen(){
    const [ticketsBooked, setTickets] = useState(0);
    
    getNoFilled((message) => {
        setTickets(message);
    }, details);

    //Display the number of tickets that have been filled
    function bookTickets(){
        var number = document.getElementById("ticketNumber").value;
        var totalTickets = parseInt(number) + parseInt(ticketsBooked);
        var lastString = details.time.slice(-2, );
        if(totalTickets > noOfSeats){
            switch(lastString){
                case "00":
                case "30":
                    //Check in the next slot 
                    var newMin = details.time.slice(0,2) + (parseInt(lastString) + 15);
                    
                    getNoFilled((message1) => {
                        
                        if(parseInt(message1) + parseInt(number) < noOfSeats){
                            details.time = newMin;
                            console.log("Hey " + details.time);
                        }
                        for(var i = 0; i < number; i++){
                            console.log("OP:" + details.time);
                            bookTicket(details);
                        }
                    }, {date : details.date, time : newMin});
                    break;
                case "15":
                case "45":
                    //Check in the prev slot 
                    var newMin = (parseInt(lastString) - 15);
                    getNoFilled((message) => {
                        if(parseInt(message) + parseInt(number) < noOfSeats){
                            details.time = details.time.slice(0,2) + newMin;
                        }
                        for(var i = 0; i < number; i++){
                            bookTicket(details);
                        }
                    }, {date : details.date, time : newMin});
                    break;
            }
        }
        else{
            for(var i = 0; i < number; i++){
                console.log("OP:" + details.time);
                bookTicket(details);
            }
        }
       
    }
    return (<div>
        <DateNtime />
        <h2>No of tickets filled: {ticketsBooked}</h2>
        <input id="ticketNumber" placeholder="Enter Number of tickets"/>
        <div><Link to='/Ticket'><button style={{float:"right", marginTop:"50px", marginRight:"200px"}} onClick={bookTickets}>BOOK TICKET(S)</button></Link></div>
    </div>);
}

export default FinalScreen;
