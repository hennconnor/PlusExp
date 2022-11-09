import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm"
import React, { useState } from 'react';
function Login() {
    const [click, setClick] = useState(true);

    function handleClick() {
        setClick(!click)
    }
    return (
        <div>
            {click ?
                <div>
                    <LoginForm />
                    <p onClick={handleClick}>Don't Have an Account? Click here to create one</p>
                </div> :
                <div>
                    <SignUpForm />
                    <p onClick={handleClick}>Already have an Account? Click here to log in</p>
                </div>}
        </div>
    )
}

export default Login;