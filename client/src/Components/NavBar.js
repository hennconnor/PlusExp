import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { currentUserState } from "../atoms"

function NavBar() {
    const user = useRecoilValue(currentUserState)
    return (
        <div>
            <Link to="/">Home</Link>
            {user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login/CreateAccount</Link>}
            <Link to="/tasklist">Task List</Link>
        </div>

    )
}

export default NavBar;