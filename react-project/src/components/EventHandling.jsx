import "./EV.css";

const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Hey I Am onClick Event");
    // }

    
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type)
        alert("Hey I am onClick Event");
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, welcome`);
    };

    return (
    <>
    <button className="click-btn" onClick={handleButtonClick}>Click Me</button>
    <br />              
    <button className="click-btn" onClick={(event) => handleButtonClick()}>Click Me 2</button>      
    <br />
    <button className="click-btn" onClick={(event) => console.log(event)}>Inline Function</button>    
    <br />
    <button className="click-btn" onClick={() => alert("Hey I Am Inline Event Function")}>Inline ARR Function</button>  
    {/* <button className="hover-btn" onClick={handleWelcomeUser}>Click Me</button>   */}
    <button className="hover-btn" onClick={() => handleWelcomeUser("Kangana")}>Click Me</button>  
    <button className="click-btn" onClick={() => handleWelcomeUser("Kajal")}>Click Me</button>  
    </>
    );
};

export default EventHandling;