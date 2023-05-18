import { userState } from '../atoms';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import EditTaskForm from './EditTaskForm';
import styled from '@emotion/styled';

import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
function TaskItem({ description, xp_amount, task }) {

    const [user, setUser] = useRecoilState(userState)

    const [click, setClick] = useState(true)

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
            .then(updatedUser => setUser(updatedUser))

    }

    function handleClick() {
        setClick(!click)
    }


    return (
        <div className='flex flex-col bg-[#C3C7C4] my-5 justify-self-center text-center max-w-[50%]'>
            <div>{description}</div>
            <p>XP Amount: {xp_amount}</p>
            <p>Category: {task.category.name}</p>
            <button className='border-2 border-black flex flex-row justify-center items-center m-2 p-2' onClick={handleDelete}>Remove Task <FaTimes /></button>
            <button className='border-2 border-black flex flex-row justify-center items-center m-2 p-2' onClick={handleComplete}>Complete Task <AiOutlineCheck /></button>
            {click ? <button className='border-2 border-black flex flex-row justify-center items-center m-2 p-2' onClick={handleClick}>Edit Task <AiOutlineEdit /></button> : <EditTaskForm task={task} onClick={handleClick} />}
        </div>
    )
}

const TaskItemDiv = styled.div`
background-color: red;
`

export default TaskItem;