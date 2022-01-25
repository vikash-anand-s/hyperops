import React, { useState } from "react";
import {details} from "./Booking";

import { bookTicket, getNoFilled } from "../firebaseFunctions";
import { Link } from "react-router-dom";
import DateNtime from "./DateNtime";

const noOfSeats = 28;

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
        if(Math.floor(totalTickets / noOfSeats) %2 != 0){
            switch(lastString){
                case "00":
                case "30":
                    //Check in the next slot 
                    var newMin = details.time.slice(0,2) + (parseInt(lastString) + 15);
                    
                    getNoFilled((message1) => {
                        
                        if(Math.floor(parseInt(message1) + parseInt(number) < noOfSeats) % 2 == 0){
                            details.time = newMin;
                        }
                        for(var i = 0; i < number; i++){
                            bookTicket(details);
                        }
                    }, {date : details.date, time : newMin});
                    break;
                case "15":
                case "45":
                    //Check in the prev slot 
                    var newMin = details.time.slice(0,2) + (parseInt(lastString) - 15);
                    getNoFilled((message) => {
                        if(Math.floor(parseInt(message) + parseInt(number) < noOfSeats) % 2 == 0){
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
    return (<div className="container" style={{marginTop:"0px"}}>
        <div>
            <div>
                <DateNtime />
                <h2>No of tickets filled: {ticketsBooked}</h2>
            </div>
        </div>
        <hr />
        <br />
        <br />
        <input id="ticketNumber" placeholder="Enter Number of tickets"/>
        <div><Link to='/Ticket'><button onClick={bookTickets}>BOOK TICKET(S)</button></Link></div>
    </div>);
}

export default FinalScreen;
