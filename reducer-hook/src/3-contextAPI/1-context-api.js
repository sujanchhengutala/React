import React, {useState, useContext} from 'react'
import { data } from '../data';

const PersonContext = React.createContext()
// console.log(PersonContext)

const ContextAPI = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id)=>{
        setPeople((people)=>{
            return people.filter((person)=> person.id !== id
            )
        })
    }
    return (
        <>
        <PersonContext.Provider value= {{ removePerson, people }}>
                <h3>context API</h3>
                <List people = {people} removePerson= {removePerson} />
        </PersonContext.Provider>
        </>
    )
}
const List = ()=>{
    const mainData = useContext(PersonContext)
    return (
    <>
    { mainData.people.map((person)=>{
        return <SinglePerson key = {person.id} {...person}  />
    })}
    </>)
}
const SinglePerson = ({id, name})=>{
   const { removePerson } = useContext(PersonContext)
    return (<div className= 'item'>
        <h4>{name}</h4>
        <button onClick = {()=>removePerson(id)} >Remove</button>

    </div>)
}

export default ContextAPI;
