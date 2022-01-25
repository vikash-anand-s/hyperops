/*import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

var userName = "";
const provider = new GoogleAuthProvider();

function Authenticate() {
  //Google Sign in 
  const auth = getAuth();

  const [contact, setContact] = useState({
    fName: "",
    password: "",
    email: ""
  });

  const user = auth.currentUser;
  if (user !== null) {
    console.log("hehho");
    userName = user.displayName;
  }

  const signInWithGoogle = () =>{
  signInWithPopup (auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      // The signed-in user info.
      userName = result.user.displayName;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  // user details; Google account
  
  //Email and password
  const createUser = () =>{
    createUserWithEmailAndPassword(auth, contact.email, contact.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      userName = contact.fName;
    }

          


const signInUser = () => {
signInWithEmailAndPassword(auth, contact.email, contact.password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  userName = contact.fName;
}

  function signIn(){
    console.log("Start" + userName);
    if(userName === ""){
      userName = document.getElementById("userNameInput").value;
    }
    document.getElementById("userName").innerHTML=(userName);
  }

  return (
    <div className="container">
      <input
        id="userNameInput"
        placeholder="Enter your name"
      />
      <br/>
      <Link to="/Booking"><button onClick={signIn}>Go</button></Link>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={createUser}>Sign up</button>
      <button onClick={signInUser}>Sign in</button>
    </div>
  );
}

export default Authenticate;
export {userName};*/

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

var userName = "";
const provider = new GoogleAuthProvider();

function Authenticate() {
  //Google Sign in 
  const auth = getAuth();

  const [contact, setContact] = useState({
    fName: "",
    password: "",
    email: ""
  });

  const user = auth.currentUser;
  if (user !== null) {
    console.log("hehho");
    userName = user.displayName;
  }

  const signInWithGoogle = () =>{
  signInWithPopup (auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      // The signed-in user info.
      userName = result.user.displayName;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  // user details; Google account
  
  //Email and password
  const createUser = () =>{
    createUserWithEmailAndPassword(auth, contact.email, contact.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      userName = contact.fName;
    }

          


const signInUser = () => {
signInWithEmailAndPassword(auth, contact.email, contact.password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  userName = contact.fName;
}

  function signIn(){
    console.log("Start" + userName);
    if(userName === ""){
      userName = document.getElementById("userNameInput").value;
    }
    document.getElementById("userName").innerHTML=(userName);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1 style={{marginTop:"0px", color:"black"}}>GETTING TO KNOW YOU</h1>
      <form onSubmit={handleChange}>
        <input
          id="userNameInput"
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={contact.password}
          placeholder="Password"
        />
      </form>
      <br/>
      <Link to="/Booking"><button onClick={signIn}>Go</button></Link>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={createUser}>Sign up</button>
      <button onClick={signInUser}>Sign in</button>
    </div>
  );
}

export default Authenticate;
export {userName};




/*
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth"; 

var userName = "";

// import { getAuth } from "firebase/auth";

const provider = new GoogleAuthProvider();

function Authenticate() {
  const [contact, setContact] = useState({
    fName: "",
    password: "",
    email: ""
  });


//Google Sign in 
const auth = getAuth();

const signInWithGoogle = () =>{
 signInWithPopup (auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}




  function handleChange(event) {
    const { name, value } = event.target;

    event.preventDefault();

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  // console.log(contact.password);

  return (
    <div className="container">
      {/* <h1>
        Hello 
      </h1> }
      <form onSubmit={handleChange}>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={contact.password}
          placeholder="Password"
        />
        <br/>
        <button onClick={createUser} >Sign up</button>
        <br/>
        <br/>
        <button onClick={signInUser} >Sign in</button>
        <br/>
        <br/>
        <button onClick={signInWithGoogle}> Sign in with Google</button>
      </form>
    </div>
  );
}

export default Authenticate;
export {userName};*/