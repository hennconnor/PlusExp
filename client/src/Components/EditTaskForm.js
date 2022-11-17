import React, { useState } from 'react';
import { userState } from '../atoms';
import { useRecoilState } from 'recoil';

function EditTaskForm({ task, onClick }) {
    const [user, setUser] = useRecoilState(userState)
    const [newDescription, setNewDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/tasks/${task.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: newDescription
            })
        })
            .then((r) => r.json())
            .then((data) => onUpdate(data))
    }

    function onUpdate(updatedTask) {

        const currentUser = { ...user }
        const updatedTasks = currentUser.tasks.map((task) => {
            if (task.id === updatedTask.id) {
                return updatedTask
            }
            else {
                return task
            }
        });
        currentUser.tasks = updatedTasks
        setUser(currentUser);

        onClick()


    }



    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>Change Task description</label>
                <input type='text' placeholder='New Task Description' value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></input>
                <button type='submit'>Submit Change</button>
            </form>
        </div>
    )
}

export default EditTaskForm;