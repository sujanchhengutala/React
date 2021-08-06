import React, { useState, useEffect } from "react"

const UseEffectApi = () => {
    const url = "https://api.github.com/users";
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url)
        console.log(response)
        const users = await response.json()
        setUsers(users)
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <h1> Github user list</h1>
            <ul className="users">
                {
                    users.map((user) => {
                        // console.log(user)
                        const { id, avatar_url, html_url, login } = user
                        return (<li key={id}>
                            <img src={avatar_url} alt = "" />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url} />
                            </div>
                        </li>)           
                    }
                    )}
            </ul>
        </>
    )
}
export default UseEffectApi;