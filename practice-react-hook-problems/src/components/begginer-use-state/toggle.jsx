import { useState } from "react";

const Toggle = () => {
    const [color, setColor] = useState(false);
    const ChangeBackgroundColor = () => {
        return (
            setColor(!color)
        )
    }
    return (

        <>
            <h1 style={{ "margin-top": "100px" }}>Toggle Button with Background Change: Develop a toggle button using the useState hook that switches between Green and Pink states when clicked. Additionally, change the background color dynamically based on the selected state.
            </h1>
            <div style={{
                backgroundColor: color ? "lightgreen" : "lightcoral",
                padding: "20px",
                textAlign: "center",
                borderRadius: "10px"
            }}>
                <h1>Toggle Button</h1>
                <button onClick={ChangeBackgroundColor} style={{ padding: "10px 20px", fontSize: "16px" }}>
                    {color ? "Green" : "Pink"}
                </button>
            </div>
        </>
    )
}

export default Toggle;