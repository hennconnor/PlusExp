import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/tasklist">Task List</Link>
        </div>

    )
}

export default NavBar;