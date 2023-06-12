import { userState } from '../atoms';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import EditTaskForm from './EditTaskForm';

import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

function TaskItem({ description, xp_amount, task }) {

    const [user, setUser] = useRecoilState(userState)

    const [click, setClick] = useState(true)

    function handleDelete(updatedUser) {
        fetch(`/tasks/${task.id}`, {
            method: "DELETE",

            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => onDelete(task, updatedUser))

    }

    function onDelete(deletedTask, updatedUser) {
        const currentUser = { ...user }
        if (currentUser.xp !== updatedUser.xp) {
            currentUser.xp = updatedUser.xp
        }
        if (currentUser.tasks_completed !== updatedUser.tasks_completed) {
            currentUser.tasks_completed = updatedUser.tasks_completed
        }
        const updatedTasks = currentUser.tasks.filter((task) => task.id !== deletedTask.id);
        currentUser.tasks = updatedTasks
        setUser(currentUser);
    }

    function handleComplete() {
        const newXP = (user.xp + xp_amount)
        const tasksCompleted = (user.tasks_completed + 1)

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                xp: newXP,
                tasks_completed: tasksCompleted
            })
        })
            .then(r => r.json())
            .then(updatedUser => { handleDelete(updatedUser) })

    }

    function handleClick() {
        setClick(!click)
    }


    return (
        <div className='flex flex-col bg-[#C3C7C4] my-5 content-center items-center min-w-[50%] border-2 border-black'>
            <div>{description}</div>
            <p>XP Amount: {xp_amount}</p>
            <p>Category: {task.category.name}</p>
            <button className='border-2 border-black flex flex-row justify-center items-center m-2 p-2 max-w-[50%]' onClick={handleDelete}>Remove Task <FaTimes /></button>
            <button className='border-2 border-black flex flex-row justify-center items-center m-2 p-2 max-w-[50%]' onClick={handleComplete}>Complete Task <AiOutlineCheck /></button>
            {click ? <button className='border-2 border-black flex flex-row justify-center items-center m-2 p-2 max-w-[50%]' onClick={handleClick}>Edit Task <AiOutlineEdit /></button> : <EditTaskForm task={task} onClick={handleClick} />}
        </div>
    )
}

export default TaskItem;