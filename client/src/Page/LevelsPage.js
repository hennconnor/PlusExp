import { userState } from '../atoms'
import { useRecoilValue } from 'recoil'
import LevelsComponent from '../Components/LevelsComponent'

function LevelsPage() {

    const user = useRecoilValue(userState)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center bg-[#C3C7C4] max-w-[50%] rounded-md'>
                <h1>Stat Tracker</h1>
                {user ? <LevelsComponent /> : <p>login to view level progress</p>
                }
            </div>
        </div>
    )
}

export default LevelsPage;