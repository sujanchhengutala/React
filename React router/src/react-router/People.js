import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {data} from '../data'

const People = () => {
    const [ people ] = useState(data)
    console.log(people)
    return (
        <>
        <h1>People</h1>
        {people.map((person) =>{
            // console.log(person.id)
            return (
            <div key = {person.id} className =' item' >
            <h4>{person.name}</h4>
            <Link to = {`/person/${person.id}`}>Know more...</Link>
            </div>
            )
        }) }
        </>

    )
}

export default People
