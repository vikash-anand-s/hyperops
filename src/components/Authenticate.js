import React, { useState } from "react";
import { Link } from "react-router-dom";

var userName;

function App() {
  function signIn(){
    userName = document.getElementById("userNameInput").value
    document.getElementById("userName").innerHTML=userName;
    console.log(userName);
  }

  return (
    <div className="container">
      <input
        id="userNameInput"
        placeholder="Enter your name"
      />
      <br/>
      <Link to="/Booking"><button onClick={signIn}>Go</button></Link>
      
    </div>
  );
}

export default App;
export {userName};