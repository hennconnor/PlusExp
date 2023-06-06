import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../atoms'

import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

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
        }).then((response) => {
            if (response.ok) {
                response.json().then((currentUser) => setUser(currentUser))
                    .then(() => navigate('/levelspage'))
            }
        });
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl my-2'>Login!</h1>
            <form>
                <label>Username:</label>
                <input className='p-0.5 border-2 border-black mx-1 focus:outline-none focus:ring-1 focus:ring-black' placeholder="Type in Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password:</label>
                <input className='p-0.5 border-2 border-black mx-1 focus:outline-none focus:ring-1 focus:ring-black' placeholder="Type in Password" value={password} type='password' onChange={(e) => setPassword(e.target.value)}></input>
                <button className='border-2 border-black p-1' onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    )
}

export default LoginForm;