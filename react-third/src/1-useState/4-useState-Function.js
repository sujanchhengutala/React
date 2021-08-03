import React, { useState } from 'react'

const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    const increaseHandler = () => {
        setTimeout(() => setValue(value + 1), 1000);
    }
    const resetHandler = () => {
        if (value !== 0) {
            setValue(0)
        }
        else {
            alert('already reseted')
        }
    }
    const decrementHandler = () => {
        if (value > 0) {
            setTimeout(() => setValue(value - 1), 1000);
        }
        else {
            alert('Zero limit Reach!')
            setValue(0)
        }
    }
    return (
        <>
            <section>
                <h2>simple counter</h2>
                <h1><button className="btn">{value}</button></h1>
                <button className='btn' onClick={increaseHandler}>Increase</button>
                <button className='btn' onClick={resetHandler}>Reset</button>
                <button className='btn' onClick={decrementHandler}>Decrease</button>
            </section>
        </>)
}
export default UseStateCounter