import { userState } from '../atoms'
import { useRecoilState } from 'recoil'

function LevelsComponent() {

    const [user, setUser] = useRecoilState(userState)

    function levelUp() {

        const currentUser = { ...user }
        if (currentUser.xp >= 100) {
            let currentXp = currentUser.xp - 100
            let currentLevel = currentUser.level + 1

            fetch(`/users/${user.id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...user,
                    xp: currentXp,
                    level: currentLevel
                })
            })
                .then(r => r.json())
                .then(updatedUser => setUser(updatedUser))
        }
    }
    levelUp();
    return (
        <div className='flex flex-col justify-center'>
            <h2> Name: {user.name}</h2>
            <img src={user.profile_pic} alt='user' height="300px" width="300px" />
            <h2>Level: {user.level}</h2>
            <h2>Exp: {user.xp}/100</h2>
            <h2>Tasks Completed: {user.tasks_completed} </h2>
        </div>
    )
}

export default LevelsComponent;