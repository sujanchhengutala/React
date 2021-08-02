import React from 'react'

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'sujan chhengutala',
    age: 22,
    message: `"drink beer save water!"`,
  })

  const changeMessage = () => {
    setPerson({ ...person, message: 'alcohol is injurus to health' })
  }

  //console.log(person)

  return (
    <>
    <h1>Hello, i'am <u><i>{person.name}</i></u> and i m {person.age} years old.
    <h2>my message is: {person.message}</h2></h1>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject