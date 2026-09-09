import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
// import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");

    //inputValue     → current input ki value
   //setInputValue  → inputValue ko update karne ka function
    const [task, setTask] = useState([]);

    const [dateTime, setDateTime] = useState("")

    const handleInputChange = (value) => { //Ye function input ke andar value change hone par chalega
        setInputValue(value);//Ye input ki state update karta hai.
    };

    const handleFormSubmit = (event) => { //Jab user Add Task button click karega ya form submit karega, ye function chalega.
        event.preventDefault();// yeh ek method hai jo by default hame event provide karti hai taki ham form ka jo default behavior hai ham usko prevent kar sake
        //browser ka page baar baar reload na ho isliye ham iska use karte hai prevent ka

        if(!inputValue) return; //Agar inputValue empty hai, toh function yahin stop kar do.

        if(task.includes(inputValue)) {//includes() check karta hai ki array ke andar given value already present hai ya nahi.
            setInputValue("") //Agar same task already hai, toh input ko empty kar do.
            return;
        }  //yeh check karta hai ki jo output mr aaray aaya hai usme yeh value present hai ya nahi

        setTask((prevTask) => [...prevTask, inputValue]);//settask me jo previous value hai usne yeh [] empty Array dii
        //prevTask mein task ki previous/current state milti hai.Spread operator purane elements ko copy karta hai:
        //Purane tasks ko rakho aur new task ko array mein add kar do.


        setInputValue("");

    };

    // console.log("hey")

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
     
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                         type="text" 
                         className="todo-input" 
                         autoComplete="off" 
                         value={inputValue}
                         onChange={(event) => handleInputChange(event.target.value)}
                         />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn">
                                    <MdDeleteForever />
                                </button>
                            </li>
                            );

                        })
                    }
                </ul>

            </section>
        </section>
    )
}