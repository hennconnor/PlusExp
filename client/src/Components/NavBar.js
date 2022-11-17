import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { userState } from "../atoms"
import styled from "@emotion/styled"

function NavBar() {
    const user = useRecoilValue(userState)
    return (
        <NavBarDiv>
            <NavBarLink to="/">Home</NavBarLink>
            {user ? <NavBarLink to="/logout">Logout</NavBarLink> : <NavBarLink to="/login">Login/CreateAccount</NavBarLink>}
            <NavBarLink to="/tasklist">Task List</NavBarLink>
            <NavBarLink to="/levelspage">Levels Page</NavBarLink>
        </NavBarDiv>

    )
}

let NavBarDiv = styled.div`
font-size: 24px;
background-color: #1D265E;
padding: 10px;
justify-content: space-between;
height: 50px;
width: 100%;
display: flex;
flex-direction: row;
`

let NavBarLink = styled(Link)`
color: white;
text-decoration: none;
margin: 40px;
&:hover{ text-decoration: underline}
`

export default NavBar;