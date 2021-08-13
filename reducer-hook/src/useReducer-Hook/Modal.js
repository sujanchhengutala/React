import React, { useEffect } from 'react'

const Modal = ({ modalContent, closeModal }) => {
    useEffect(()=>{
    // closeModal();
    setTimeout(() => {
        closeModal()
    }, 2000)
    })

    return (
        <div className='modal'>
            <p>{modalContent}</p>
        </div>
    )
}

export default Modal
