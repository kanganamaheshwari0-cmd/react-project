import { useState } from "react";

import "../EV.css";

const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // }
    console.log(useState());
    const [count, setCount] = useState(0);
    console.log("Parent Component rendered");
    const handleButtonClick = () => {
        setCount(() => count + 1)
    }
    // console.log(count)
    return (
        <>
        <div className="main-div">
        <h1>{count}</h1>
        <button className="g-div" onClick={handleButtonClick}>Increment</button>
        </div>
        <ChildComponent count={count}/>
        </>
        
    );
};

function ChildComponent({count}) {
    console.log("Child Component rendered");
    return <div className="main-div"> <h2>Child Component - {count} </h2></div>
}


 


export default State