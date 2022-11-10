import React, { useState } from 'react';
import { useRecoilState } from 'recoil'

import { currentUserState } from '../atoms'

function SignUpForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, name }),
        })
            .then((r) => r.json())
            .then((newUser) => setCurrentUser(newUser))
    }
    return (
        <div>
            <h1>Create An Account</h1>
            <form>
                <label>Username</label>
                <input placeholder={"Type in Username"} value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input placeholder={"Type in Password"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label>Display Name</label>
                <input placeholder={"Type in Name"} value={name} onChange={(e) => setName(e.target.value)}></input>
                <button onClick={handleSubmit}>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;