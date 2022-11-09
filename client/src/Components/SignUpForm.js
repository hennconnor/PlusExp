function SignUpForm() {
    return (
        <div>
            <h1>Create An Account</h1>
            <form>
                <label>Username</label>
                <input placeholder={"Type in Username"}></input>
                <label>Password</label>
                <input placeholder={"Type in Password"}></input>
                <label>Display Name</label>
                <input placeholder={"Type in Name"}></input>
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;