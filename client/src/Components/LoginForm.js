import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { userState } from '../atoms'

function LoginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useRecoilState(userState)

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then((loggedInUser) => setUser(loggedInUser))
    }
    console.log(user);
    return (
        <div>
            <h1>Login!</h1>
            <form>
                <label>Username:</label>
                <input placeholder="Type in Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password:</label>
                <input placeholder="Type in Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    )
}

export default LoginForm;