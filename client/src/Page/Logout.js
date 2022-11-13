import { useResetRecoilState } from "recoil"
import { userState } from "../atoms"

function Logout() {

    const resetUser = useResetRecoilState(userState)

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