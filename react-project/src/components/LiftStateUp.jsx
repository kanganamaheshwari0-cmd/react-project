import { useState } from "react";

export const LiftingState = () => {  //LiftingState naam ka component banaya hai. yeh parent component hai
    const [ inputValue, setInputvalue ] = useState("");

    return (
        <>
        <InputComponent inputValue = {inputValue} setInputvalue = {setInputvalue} />
        <DisplayComponent inputValue = {inputValue} />
        </>
    );
};

const InputComponent = ({inputValue, setInputvalue}) => {  //Ye child component hai Yahan props destructuring ho rahi hai.
    return (

        <>
        <input
         type="text" //text enter karne ke liye
          placeholder="enter your name" //input ke andar hint show karega
          value={inputValue} //Input ki value ko React ki state ke saath connect kar diya.
          onChange={(e) => setInputvalue(e.target.value)} //Jab user input mein kuch type karta hai, onChange event hota ha
          //User ne input mein abhi kya type kiya hai e.target.value
        ></input>
        </>
    );
};

const DisplayComponent = ({inputValue}) => { //Ye second child component hai.
    return <p>The current input value is: {inputValue} </p>
};