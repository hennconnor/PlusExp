import { userState } from '../atoms'
import { useRecoilValue } from 'recoil'
import LevelsComponent from '../Components/LevelsComponent'

function LevelsPage() {

    const user = useRecoilValue(userState)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center bg-[#C3C7C4] max-w-[50%] border-2 border-black rounded-md p-3'>
                <h1 className='text-lg font-bold'>Stat Tracker</h1>
                {user ? <LevelsComponent /> : <p>login to view level progress</p>
                }
            </div>
        </div>
    )
}

export default LevelsPage;