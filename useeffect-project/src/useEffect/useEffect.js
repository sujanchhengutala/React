import React, { useState, useEffect } from 'react'

const UseEffectApi = () => {
    const [user, setuser] = useState([]);
    const getUserData = async () => {
        const response = await fetch('https://api.github.com/users');
        setuser(await response.json())
    }
    useEffect(() => {
        getUserData();
    }, [])
    return <>

        <h2>Lists of github User</h2>
        <div className="container-fluid mt-5">
            <div className="row text-center">
                {
                    user.map((users) => {
                        // console.log(users)
                        const { avatar_url, id, login } = users;
                        return (
                            <div className="col-10 col-md-4 mt-5" key={id} >
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                        <div className="image">
                                            <img src={avatar_url} alt="" className="rounded" width="155" />
                                        </div>
                                        <div className="ml-4 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{login}</h4> <span className="text-left"><h6> Web Developer</h6></span>
                                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">38</span></div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span></div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </>
}
export default UseEffectApi;