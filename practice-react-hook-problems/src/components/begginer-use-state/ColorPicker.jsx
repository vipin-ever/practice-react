import { useState } from "react";


const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff");
    const ChangeBackground = (e) => {
        return(
            setColor(e.target.value)
        )
    }
    return (
        <>
            <h1 style={{ "margin-top": "100px" }}>Color Picker: Create a color picker using useState to change the background color of a div based on the users color selection.</h1>
            <div style={{
                backgroundColor: color,
                padding: "50px",
                borderRadius: "10px",
                minHeight: "200px"
            }}>
                <input
                    type="color"
                    value={color}
                    onChange={ChangeBackground}
                />
            <p style={{ color: color === "#ffffff" ? "black" : "white" }}>{`Color Code : ${color}`}</p>

            </div>
        </>
    )
}

export default ColorPicker;