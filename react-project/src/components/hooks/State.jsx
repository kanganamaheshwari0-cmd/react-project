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
    const handleButtonClick = () => {
        setCount(() => count + 1)
    }
    // console.log(count)
    return (
        <>
        <section className="main-div">
        <h1>{count}</h1>
        <button className="g-div" onClick={handleButtonClick}>Increment</button>
        </section>
        </>
        
    );
};


export default State