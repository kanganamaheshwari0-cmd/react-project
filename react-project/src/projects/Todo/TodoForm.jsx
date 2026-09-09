 import { useState } from "react";
 
 export const TodoForm = ({onAddTodo}) => {
 const [inputValue, setInputValue] = useState("");

 const handleInputChange = (value) => { //Ye function input ke andar value change hone par chalega
        setInputValue(value);//Ye input ki state update karta hai.
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue)
        setInputValue("");

    }

    return (
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
    )
}