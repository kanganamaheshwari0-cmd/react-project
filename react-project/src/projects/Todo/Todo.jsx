import { useState } from "react";
// import { MdCheck, MdDeleteForever } from "react-icons/md";
// import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
    // const [inputValue, setInputValue] = useState("");

    //inputValue     → current input ki value
   //setInputValue  → inputValue ko update karne ka function
    const [task, setTask] = useState([]);

    // const [dateTime, setDateTime] = useState("")

    // const handleInputChange = (value) => { //Ye function input ke andar value change hone par chalega
    //     setInputValue(value);//Ye input ki state update karta hai.
    // };

    const handleFormSubmit = (inputValue) => { //Jab user Add Task button click karega ya form submit karega, ye function chalega.
        // event.preventDefault();// yeh ek method hai jo by default hame event provide karti hai taki ham form ka jo default behavior hai ham usko prevent kar sake
        //browser ka page baar baar reload na ho isliye ham iska use karte hai prevent ka

        if(!inputValue) return; //Agar inputValue empty hai, toh function yahin stop kar do.

        if(task.includes(inputValue)) //includes() check karta hai ki array ke andar given value already present hai ya nahi.
            // setInputValue("") //Agar same task already hai, toh input ko empty kar do.
            return;
          //yeh check karta hai ki jo output mr aaray aaya hai usme yeh value present hai ya nahi

        setTask((prevTask) => [...prevTask, inputValue]);//settask me jo previous value hai usne yeh [] empty Array dii
        //prevTask mein task ki previous/current state milti hai.Spread operator purane elements ko copy karta hai:
        //Purane tasks ko rakho aur new task ko array mein add kar do.


        // setInputValue("");

    };

    // console.log("hey")

     //TODO HANDLEDELETETODO FUNCTION

     const handleDeleteTodo = (value) => {
        console.log(task); //Ye task array ko console mein print karega.
        console.log(value); //Ye console mein batayega ki kaunsa task delete karne ke liye mila hai.
        const updateTask = task.filter((curTask) => curTask !== value);
        //filter() array ke elements ko check karta hai aur new array banata hai.
        //value ka matlab hai jo task delete karna hai.
        //curTask !== value Jo task delete hone wale task ke equal nahi hai, sirf usko new array mein rakho
        setTask(updateTask); //Ab hum React ki task state ko new array se update kar rahe hain
     };

     //TODO HANDLECLEARTODODATA FUNCTION

     const handleClearTodoData = () => {
        setTask([]); //Ye directly task ko empty array bana deta hai.
     };


     
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
                
            </header>
            <TodoForm onAddTodo = {handleFormSubmit} />
            
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                              <TodoList 
                               key={index}
                               data={curTask}
                               onHandleDeleteTodo = {handleDeleteTodo}
                               />
                            );

                        })
                    }
                </ul>

            </section>
            <section>
                <button className="clear-btn" onClick= {handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}