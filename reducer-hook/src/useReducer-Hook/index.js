import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../data'
import {reducer} from './reducer'

const initialState = {
    people: data,
    isModalOpen: false,
    modalContent: 'Hello'
}
const Index = () => {
    const [name, setName] = useState('')


    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name }
            dispatch({ type: 'ADD_ITEM', payload: newItem })
            setName('')
        } else {
            dispatch({ type: 'NO_VALUE' })
        }
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return (
        <>
            <article className="container">
                {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}

                <form onSubmit={handleSubmit} className='form'>
                    <div>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <button type='submit'>Add</button>
                </form>
                {state.people.map((person) => {
                    return (
                        <div key={person.id} className="item">
                            <h4>{person.name}</h4>
                            <button onClick={() => dispatch({ type: 'REMOVER', payload: person.id })}>REMOVE</button>
                        </div>
                    )
                })}
            </article>
        </>
    )
}

export default Index



