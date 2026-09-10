import { useState } from "react";
import "../src/projects/Todo/Todo.css";
import { MdDeleteForever } from "react-icons/md";

export const Keys = () => {
    const [task, setTasks] = useState([]); 
    //Yahan Todo ki list store hogi.
    //Matlab abhi koi task nahi hai.
    //task Current tasks ko store karta hai.
    //setTasks Task ko update karta hai.
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => { //Ye function input ki value receive karta hai.
        setInputValue(value); //Jo value input se aayi hai, usko inputValue state mein store kar deta hai.
    };

    const handleFormSubmit = (event) => { //Jab user Add Task karta hai, ye function chalega.
        event.preventDefault();

        if(!inputValue) return; //Check karta hai ki input empty hai ya nahi.

        if(task.includes(inputValue)) { //includes() check karta hai ki inputValue pehle se task array mein present hai ya nahi.
            setInputValue(""); //Input box ko empty kar deta hai.
            return;
        }


        setTasks((prevTasks) => [...prevTasks,inputValue]);
        setInputValue("");
    };

    console.log(task);

    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section id="form">
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
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </form>
            </section>
            <section className="myUnOderList">
                <ul className="todo-list">
                    {task.map((curTask, index) => {
                        return <TodoLists key={index} data={curTask} />;
                    })}
                </ul>
            </section>
        </section>
    );
};

const TodoLists = ({data}) => {
    return(
        <li className="todo-item">
            <span>{data}</span>
            <input type="text" />
            <button>
                <MdDeleteForever className="delete-btn" />
            </button>
        </li>
    );
};