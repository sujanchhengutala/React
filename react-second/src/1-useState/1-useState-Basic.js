import React, { useState } from "react";
const UseStateBasic = () => {
    const [text, setText] = useState('sujan chhengutala')
    const handleClick = () => {

        if (text == 'sujan chhengutala') {
            setText(`He is react student`)
        }
        else {
            setText('He is not react student')
        }
    }
    return <>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick} >click me</button>
    </>
}
export default UseStateBasic;