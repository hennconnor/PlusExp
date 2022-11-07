function LoginForm() {
    return (
        <div>
            <p>Login!</p>
            <form>
                <label>Username:</label>
                <input placeholder="Type in Username"></input>
                <label>Password:</label>
                <input placeholder="Type in Password"></input>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default LoginForm;