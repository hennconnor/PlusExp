import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { currentUserState } from '../atoms'

function LoginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

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
            .then((loggedInUser) => setCurrentUser(loggedInUser))
    }
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