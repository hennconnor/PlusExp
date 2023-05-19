import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm"
import React, { useState } from 'react';
function Login() {
    const [click, setClick] = useState(true);

    function handleClick() {
        setClick(!click)
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center bg-[#C3C7C4] p-5'>
                {click ?
                    <div className='flex flex-col justify-center items-center'>
                        <LoginForm />
                        <p className='cursor-pointer' onClick={handleClick}>Don't Have an Account? Click here to create one</p>
                    </div> :
                    <div>
                        <SignUpForm />
                    </div>}
            </div>
        </div>
    )
}

export default Login;