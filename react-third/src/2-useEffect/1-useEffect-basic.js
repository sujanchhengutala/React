import React, { useState, useEffect } from "react"
//by default run after every re-render
//second parameter
//cleanup function
const UseEffectBasic = ()=>{
    const [size, setSize] = useState(window.innerWidth)
    console.log(size)

    const checkSize = ()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        console.log('useEffect running')
        window.addEventListener('resize', checkSize)

        return ()=>{
            console.log('cleanup function running')
            window.addEventListener('resize', checkSize)


        }
    })
    return(
        <>
        <h1>Window</h1>
        <h2>{size}px</h2>
        </>
    ) 
}
export default UseEffectBasic