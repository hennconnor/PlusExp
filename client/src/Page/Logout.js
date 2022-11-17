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
            <p>Thanks for Stopping by</p>
            <button id="logoutbtn" onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Logout;