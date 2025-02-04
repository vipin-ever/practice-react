import { useState } from "react";

const Counter = () => {
    const [count, setCount]  = useState(0)
    const increment = () => {
        return (
                setCount(count+1)
        )
    }
    const decrement = () => setCount(count-1);

    return (
        <>
            <h1>
                Simple Counter: Create a basic counter using the useState hook. Implement buttons to increment and decrement the counter value.
            </h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{"margin-left": "10px"}}>Decrement</button>
        </>
    )
}

export default Counter;