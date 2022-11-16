import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { userState } from "../atoms"
import styled from "@emotion/styled"

function NavBar() {
    const user = useRecoilValue(userState)
    return (
        <NavBarDiv>
            <Link to="/">Home</Link>
            {user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login/CreateAccount</Link>}
            <Link to="/tasklist">Task List</Link>
            <Link to="/levelspage">Levels Page</Link>
        </NavBarDiv>

    )
}

let NavBarDiv = styled.div`
font-size: 24px;
margin: 0;
color: #F3F7F0;
justify-content: space-between;

`

export default NavBar;