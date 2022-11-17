import React, { useState } from 'react';
import { useRecoilState } from 'recoil'

import { userState } from '../atoms'

function SignUpForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [user, setUser] = useRecoilState(userState)

    console.log(imageFile);
    function handleSubmit(e) {
        e.preventDefault()

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, name, level: 1, xp: 0 }),
        })
            .then((r) => r.json())
            .then((newUser) => setUser(newUser))
    }
    return (
        <div>
            <h1>Create An Account</h1>
            <form>
                <label>Username</label>
                <input placeholder={"Type in Username"} value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input placeholder={"Type in Password"} value={password} type='password' onChange={(e) => setPassword(e.target.value)}></input>
                <label>Display Name</label>
                <input placeholder={"Type in Name"} value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Image</label>
                <input type="file" name="image" id="image" onChange={(e) => setImageFile(e.target.files[0])}></input>
                <button onClick={handleSubmit}>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;