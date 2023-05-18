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
        <div className='flex flex-col justify-center items-center bg-[#C3C7C4] my-2 justify-self-center'>
            <p>Thanks for Stopping by</p>
            <button className='' onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Logout;