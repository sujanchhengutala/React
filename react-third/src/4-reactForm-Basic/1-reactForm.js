import React, { useState } from 'react'
const ReactForm = () => {
    // const [firstName, setFirstName] = useState('')
    // const [email, setEmail] = useState('')
    // const [age, setAge] = useState('')
    const [person, setPerson]= useState({firstName: '', email: '', age: ''})
    const [people, setPeople] = useState([])
    console.log(people)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const person = { id: new Date().getTime(), firstName, email }
    //     if (firstName && email) {
    //         setPeople((People) => {
    //             return [...People, person]
    //         })
    //         setFirstName('')
    //         setEmail('')
    //     }
    //     else {
    //         console.log('your value is empty')
    //     }
    // }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (person.firstName && person.email && person.age) {
                    const newPerson = {...person, id: new Date().getTime().toString()}
                    setPeople([...people, newPerson])
                    setPerson({firstName: '', email: '', age: ''})
            }

    }
    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]: value})

    }
    return (
        <>
            <article className="container">
                <h1>React form basic</h1>
                <form className="form">
                    <div className="form-control">
                        <label htmlFor="firstName">Name :</label>
                        <input
                            type="text"
                            id="firstName"
                            name='firstName'
                            value={person.firstName}
                            onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="text"
                            id="email"
                            name='email'
                            value={person.email}
                            onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age :</label>
                        <input
                            type="text"
                            id="age"
                            name='age'
                            value={person.age}
                            onChange={handleChange} />
                    </div>
                    <button type='submit' onClick= {handleSubmit}> Add Person </button>
                </form>
                {
                    people.map((person) => {
                        const { id, firstName, email, age } = person;
                        return <div className='item' key={id}>
                            <h4>{firstName}</h4>
                            <h6>{email}</h6>
                            <h6>{age}</h6>
                        </div>
                    })
                }
            </article>
        </>
    )
}

export default ReactForm;
