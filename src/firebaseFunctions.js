//Firebase imports
import {db} from "./firebase";
import { collection, addDoc, getDocs} from "firebase/firestore";
import { userName } from "./components/Authenticate";

//username for testing
//const userName  = "Vikash";

//functions
async function bookTicket(details){
    try {
        if(!(details.date === "" || details.time === ""))
        {    const docRef = await addDoc(collection(db, "-", details.date, details.time), {
            name: userName
            });
      
            console.log("Document written with ID: ", docRef.id);
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

async function getNoFilled(callback, details){
    try{
        const querySnapshot = await getDocs(collection(db, "-", details.date, details.time));
        var length = 0;
        querySnapshot.forEach((doc) => {
            length++;   //calculate the number of entries in the database
        });
        callback(length);
    }
    catch(err){
        console.log("Error was thrown");
    }
}

export {bookTicket, getNoFilled};