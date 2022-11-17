import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Axios from 'axios';
import { userState } from '../atoms';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

// const cloudinary = require('cloudinary').v2;

// // Return "https" URLs by setting secure: true
// cloudinary.config({
//     secure: true
// });

// // Log the configuration
// console.log(cloudinary.config());

// cloudinary.config({
//     cloud_name: 'dzp4uotrn',
//     api_key: '764782659314951',
//     api_secret: 'KCpIj5gNuEELSwinKwRhCKfoIBU',
//     secure: true
// });

function SignUpForm() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [image_url, setImage_url] = useState('')
    const [user, setUser] = useRecoilState(userState)


    function handleSubmit(e) {

        e.preventDefault()
        const data = new FormData()
        data.append("file", imageFile)
        data.append("upload_preset", "crp9rcsv")
        data.append("cloud_name", "dzp4uotrn")
        fetch("https://api.cloudinary.com/v1_1/dzp4uotrn/image/upload", {
            method: "post",
            body: data
        }).then(response => {
            if (response.ok) {
                response.json().then((returnImage) => signUp(returnImage))

            }

        })

        function signUp(returnImage) {
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, name, level: 1, xp: 0, profile_pic: returnImage.url }),
            })
                .then((r) => r.json())
                .then((newUser) => setUser(newUser))
        }
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