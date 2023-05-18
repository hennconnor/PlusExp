import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { userState } from "../atoms"

function NavBar() {
    const user = useRecoilValue(userState)
    return (
        <div>
            {user ?
                <div className='flex flex-row justify-between bg-[#C3C7C4] p-3 mb-5'>
                    <Link className='hover:underline' to="/">Home</Link>
                    <Link className='hover:underline' to="/logout">Logout</Link>
                    <Link className='hover:underline' to="/tasklist">Task List</Link>
                    <Link className='hover:underline' to="/levelspage">Levels Page</Link>
                </div>
                :
                <div className='flex flex-row justify-between bg-[#C3C7C4] p-3 mb-5'>
                    <Link className='hover:underline' to="/">Home</Link>
                    <Link className='hover:underline' to="/login">Login/CreateAccount</Link>
                </div>
            }

        </div >

    )

    // <Link className='hover:underline' to="/">Home</Link>
    // {user ? <Link className='hover:underline' to="/logout">Logout</Link> : <Link className='hover:underline' to="/login">Login/CreateAccount</Link>}
    // <Link className='hover:underline' to="/tasklist">Task List</Link>
    // <Link className='hover:underline' to="/levelspage">Levels Page</Link>
}

export default NavBar;