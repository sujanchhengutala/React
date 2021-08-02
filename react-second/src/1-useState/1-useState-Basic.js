import React, { useState } from "react";
const UseStateBasic = () => {
    const [text, setText] = useState('sujan chhengutala')
    const handleClick = () => {
        return (text === 'sujan chhengutala') ? setText('He is react student') : setText('He is not react student')
        
    }
    return ( <>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick} >click me</button>
    </>
    )
}
export default UseStateBasic;