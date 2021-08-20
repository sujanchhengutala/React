import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { data } from '../data'

const Person = () => {
    const [name, setName] = useState('default name')
    // console.log(useParams())
    const {id} = useParams()
    // console.log(id)
    // console.log(data)
    useEffect(()=>{
       const newPerson = data.find((person)=> person.id === parseInt(id))
       setName(newPerson.name)
    },[setName, id])

    return <><h2>{ name }</h2>
    <Link to = '/People' className = "btn">Back to person</Link></>
}
export default Person
