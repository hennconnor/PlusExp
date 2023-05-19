import { useResetRecoilState } from "recoil"
import { userState } from "../atoms"
import { FaTimes } from "react-icons/fa";

const LogoutModal = ({ handleLogoutClick }) => {
    const resetUser = useResetRecoilState(userState)

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then(resetUser)
            .then(handleLogoutClick())
    }


    return (
        <div className='fixed z-10 flex flex-col justify-center items-center bg-white my-2 border-2 border-black rounded-md left-[50%] top-[50%] p-2'>
            <FaTimes className='cursor-pointer self-end' onClick={handleLogoutClick} />
            <p className='p-2'>Are You Sure You Want to Logout?</p>
            <button className='border-2 border-black p-2 my-1' onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default LogoutModal;