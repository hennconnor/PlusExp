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

    return (
        <div>
            <h3>{description}</h3>
            <p>xp amount: {xp_amount}</p>
            <button onClick={handleDelete}>Remove Task</button>
        </div>
    )
}

export default TaskItem;