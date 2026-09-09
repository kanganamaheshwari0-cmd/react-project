import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
// import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);//Empty string se value is value se update ho jaygi
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();// yeh ek method hai jo by default hame event provide karti hai taki ham form ka jo default behavior hai ham usko prevent kar sake

        if(!inputValue) return;

        if(task.includes(inputValue)) {
            setInputValue("")
            return;
        }  //yeh check karta hai ki jo output mr aaray aaya hai usme yeh value present hai ya nahi

        setTask((prevTask) => [...prevTask, inputValue]);//settask me jo previous value hai usne yeh [] empty Array dii


        setInputValue("")

    };
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
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