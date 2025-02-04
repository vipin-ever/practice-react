import { useState } from "react";

const Input = () => {
    const[name, setName] = useState("")
    const displayName = (e) => {
        return(
            setName(e.target.value)
        )
    }
    return (
        <>
            <h1 style={{"margin-top": "100px"}}>User Input Form: Build a form with useState to capture and display user input. For example, capture the users name and display a greeting.</h1>
            <h2>User Input Form</h2>
            <input 
            type="text"
            placeholder="Enter Your Name"
            onChange={displayName}
            />
            <h2>{name && `Hello, ${name}!`}</h2>
        </>
        )
}

export default Input;