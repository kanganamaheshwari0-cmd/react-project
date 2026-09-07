import "./EV.css";

const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`hey, ${user}`);
        // console.log(`Hey User, Welcome`);

    };

    const handleHover = () => {
        alert(`hey Thanks for hovering me`);

    };
    return(
        <>
        <WelcomeUser onClick={() => handleWelcomeUser("kangana")} onMouseEnter={handleHover}/>
        </>
    )
};

const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log(`Hey User, Welcome`);
        onClick();
    }
    return(
        <>
        <button className="click-btn" onClick={onClick}>Click</button>
        <button className="hover-btn" onMouseEnter={onMouseEnter}>Hover me</button>
        <button className="click-btn" onClick={handleGreeting}>Greeting</button>
        </>
    )

}

export default EventProps