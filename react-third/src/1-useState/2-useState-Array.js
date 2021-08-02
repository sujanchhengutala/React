import { useState } from "react"
import { data } from '../data'
const UseStateArray = () => {
    const [people, setPeople] = useState(data)
    //console.log(people)
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        //console.log(newPeople)
        setPeople(newPeople)

    }
    return (
        <>
            {people.map((peoples) => {
                //console.log(peoples)
                const { id, name } = peoples;
                // console.log(id, name)
                return (<div key={id} className="item">
                    <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>Remove item</button>
                </div>)

            })}
            <button className ="btn" onClick = {() => setPeople([])}> Remove All </button>
        </>
    )

}
export default UseStateArray