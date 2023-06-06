import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms';

import { FaTimes } from 'react-icons/fa';

function CreateTaskForm({ createModalClick }) {
    const [description, setDescription] = useState('')
    const [xp_amount, setXpAmount] = useState(0);
    const [categoryName, setCategoryName] = useState('Fitness');

    const [categoryList, setCategoryList] = useState([])
    const [user, setUser] = useRecoilState(userState);


    useEffect(() => {
        fetch('/categories').then((response) => {
            if (response.ok) {
                response.json().then((list) => setCategoryList(list))
            }
        });
    }, []);


    function findCategoryId() {
        const taskCategory = categoryList.filter((category) => category.name === categoryName)
        return taskCategory[0].id
    }

    function addTask(addedTask) {
        const updatedUser = {
            ...user,
            tasks: [...user.tasks, addedTask]
        }
        setUser(updatedUser);
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch('/tasks', {
            method: "POST",

            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                description: description,
                xp_amount: xp_amount,
                user_id: `${user.id}`,
                category_id: findCategoryId(categoryName),
                ranking: `${user.tasks.length}`

            })
        })
            .then(r => r.json())
            .then((newTask) => addTask(newTask))
            .then(() => createModalClick())
    }


    return (
        <div className='fixed z-10 flex flex-col bg-white my-2 border-2 border-black rounded-md left-[50%] top-[50%] p-2 translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex flex-row justify-between items-center'>
                <div></div>
                <h3>Add Task</h3>
                <FaTimes className='cursor-pointer' onClick={createModalClick} />
            </div>

            <form className='flex flex-col justify-center min-w-[375px]' onSubmit={handleSubmit}>
                <label>Task Description:</label>
                <input className='m-1 p-1 border-2 border-black focus:outline-none focus:ring-1 focus:ring-black' value={description} placeholder="Type in Task Description" onChange={(e) => setDescription(e.target.value)}></input>
                <label>XP Amount: {'(1-100)'}</label>
                <input className='m-1 p-1 border-2 border-black focus:outline-none focus:ring-1 focus:ring-black' value={xp_amount} placeholder="Type in Valid XP Amount" type="number" min='1' max='100' onChange={(e) => setXpAmount(e.target.value)}></input>
                <label>Category</label>
                <select className='m-1 p-1 border-2 border-black focus:outline-none focus:ring-1 focus:ring-black' onChange={(e) => setCategoryName(e.target.value)}>
                    {categoryList.map((category) => {
                        return (<option key={category.id}>{category.name}</option>)

                    }
                    )}
                </select>
                <button className='border-2 p-2 m-2 border-black'>Create New Task</button>
            </form>
        </div>
    )
}

export default CreateTaskForm;