import React, { useState, useEffect } from "react"
//by default run after every re-render
//second parameter
//cleanup function
const UseEffectBasic = ()=>{
    const [value, setValue] = useState(0);
    useEffect(()=>{
        console.log('inside useEffect')
        if(value >= 1){
            document.title = `New message (${value})`
        }
    }, [value])
    console.log('outside useEffect')
    return(
        <>
        <h1>{value}</h1>
        <button className = 'btn' onClick = {()=>setValue(value + 1)}>click me</button>
        </>
    ) 
}
export default UseEffectBasic