import { userState } from '../atoms'
import { useRecoilValue } from 'recoil'
import LevelsComponent from '../Components/LevelsComponent'

function LevelsPage() {

    const user = useRecoilValue(userState)
    return (
        <div>
            <h1>Stat Tracker</h1>
            {user ? <LevelsComponent /> : <p>login to view level progress</p>
            }
        </div>
    )
}

export default LevelsPage;