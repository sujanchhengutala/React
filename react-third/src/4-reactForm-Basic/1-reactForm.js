import React, { useState } from 'react'
const ReactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])
    console.log(people)

    const handleSubmit = (e) => {
        e.preventDefault();
        const person = { id: new Date().getTime(), firstName, email }
        if (firstName && email) {
            setPeople((People) => {
                return [...People, person]
            })
            setFirstName('')
            setEmail('')
        }
        else {
            console.log('your value is empty')
        }
    }
    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name :</label>
                        <input
                            type="text"
                            id="firstName"
                            name='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="text"
                            id="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type='submit'> Add Person </button>
                </form>
                {
                    people.map((person) => {
                        const { id, firstName, email } = person;
                        return <div className='item' key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    })
                }
            </article>
        </>
    )
}

export default ReactForm;
