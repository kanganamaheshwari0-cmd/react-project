import { useEffect, useState } from "react";

export const TodoDate = () => {

     const [dateTime, setDateTime] = useState("")

    //TODO DATE-TIME
     useEffect(() => { //Iska use hum side effects ke liye karte hain.Yahan side effect hai:Har 1 second mein timer chalana
        
        const interval = setInterval(() => { //Ye kisi code ko fixed time interval ke baad baar-baar execute karta hai.
        const now = new Date(); //Current date aur time nikal raha hai.
        const formatteDate = now.toLocaleDateString(); //toLocaleDateString() current date ko readable format mein convert karta hai.
        const formatteTime = now.toLocaleTimeString(); //toLocaleTimeString() current time ko readable format mein convert karta hai.
       
       
        setDateTime(`${formatteDate} - ${formatteTime}`); //Yahan setDateTime state ko update kar raha hai.
       //${} ka use variable ki value ko string ke andar insert karne ke liye hota hai.
    }, 1000); //1000 ka Matlab callback function har 1 second mein chalega.

    
    return () => clearInterval(interval); //clearInterval() timer ko stop karta hai.

     }, []); //Ye useEffect ka dependency array hai.

    return <h2 className="date-time">{dateTime}</h2>
}