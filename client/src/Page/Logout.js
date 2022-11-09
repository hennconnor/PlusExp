import { useResetRecoilState } from "recoil"
import { currentUserState } from "../atoms"

function Logout() {

    const resetUser = useResetRecoilState(currentUserState)

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then(resetUser)
    }


    return (
        <div>
            < p>Welcome</p>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Logout;