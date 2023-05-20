import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useNavigate } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa';

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

function SignUpForm({ handleCreateClick }) {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [image_url, setImage_url] = useState('')
    const [user, setUser] = useRecoilState(userState)

    const navigate = useNavigate();


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
    }

    function signUp(returnImage) {
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, name, level: 1, xp: 0, profile_pic: returnImage.url }),
        }).then(response => {
            if (response.ok) {
                response.json()
                    .then((currentUser) => setUser(currentUser))
                    .then(() => navigate('/levelspage'))
                    .then(() => handleCreateClick())
            }
        }
        )
    }
    return (
        <div className='flex flex-col fixed justify-center content-center z-10 bg-white border-2 border-black max-w-[50%] rounded-md left-[50%] top-[50%] p-2 translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex flex-row justify-between my-1'>
                <div></div>
                <h1>Create An Account</h1>
                <FaTimes onClick={handleCreateClick} className='cursor-pointer' />
            </div>

            <form className='flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center my-1'>
                    <label>Username:</label>
                    <input placeholder={"Type in Username"} className='border-2 border-black p-1 m-1 focus:outline-none focus:ring-1 focus:ring-black' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label>Password:</label>
                    <input placeholder={"Type in Password"} className='border-2 border-black p-1 m-1 focus:outline-none focus:ring-1 focus:ring-black' value={password} type='password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='flex flex-row justify-center items-center my-1'>
                    <label>Display Name:</label>
                    <input placeholder={"Type in Name"} className='border-2 border-black p-1 m-1 focus:outline-none focus:ring-1 focus:ring-black' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label>Image:</label>
                    <input className='cursor-pointer' type="file" name="image" id="image" onChange={(e) => setImageFile(e.target.files[0])}></input>
                </div>
                <button className='border-2 border-black p-2 my-1' onClick={handleSubmit}>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;