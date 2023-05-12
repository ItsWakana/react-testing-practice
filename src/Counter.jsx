import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {

        setCount((prev) => prev + 1);
    }

    return (
        <>
            <h1 className="counter">Count:{count}</h1>
            <button 
            className="increment-btn"
            onClick={incrementCount}>
            Increment</button>
        </>
    )
}

export default Counter;