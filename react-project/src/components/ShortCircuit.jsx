import "./hooks/Hooks.css";
import { useState } from "react";

const ShortCircuitExample = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    //isLoggedIn     → current value
    //setIsLoggedIn  → value change karne ka function
    //true Matlab starting mein user logged in hai.
    const [user, setUser] = useState("")
    return (
        <section className="container short-container">
            <h1>welcome to the Shortcircuit evaltation</h1>

            {isLoggedIn && <p>You aree logged in!</p>} //Agar condition true hai, tab element render karo.

            {user ? `Hello ${user}` : "Please logged in!"}

            <div className="grid-three-cols">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    Toggle Login State
                    </button>
                <button onClick={() => setUser("Kangana maheshwari")}>Set User</button>
                <button onClick={() => setUser("")}>Clear User</button>
            </div>
        </section>
    );
};

export default ShortCircuitExample;