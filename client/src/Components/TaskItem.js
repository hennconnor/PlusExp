import { userState } from '../atoms';
import { useRecoilState } from 'recoil';

function TaskItem({ description, xp_amount, task }) {

    const [user, setUser] = useRecoilState(userState)

    function handleDelete() {
        fetch(`/tasks/${task.id}`, {
            method: "DELETE",

            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => onDelete(task))

    }

    function onDelete(deletedTask) {
        const currentUser = { ...user }
        const updatedTasks = currentUser.tasks.filter((task) => task.id !== deletedTask.id);
        currentUser.tasks = updatedTasks
        setUser(currentUser);
    }

    function handleComplete() {
        const newXP = (user.xp + xp_amount)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                xp: newXP
            })
        })
            .then(r => r.json())
            .then(updatedUser => setUser({ ...user, xp: updatedUser.xp }))

    }

    return (
        <div>
            <h3>{description}</h3>
            <p>XP Amount: {xp_amount}</p>
            <p>Category: {task.category.name}</p>
            <button onClick={handleDelete}>Remove Task</button>
            <button onClick={handleComplete}>Complete Task</button>
        </div>
    )
}

export default TaskItem;