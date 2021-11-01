// Code Keypad Component Here
import React from "react"

function Keypad() {
    function keysBeingEntered() {
        console.log("Entering password...")
    }
    
    
    return (
        <input
            type="password"
            name="keypad"
            onChange={keysBeingEntered}
            placeholder="secret password"
        />
    )
    
}

export default Keypad