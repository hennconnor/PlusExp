import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms';
import styled from '@emotion/styled'

function CreateTaskForm() {
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
    }


    return (
        <CreateFormDiv>
            <h3>Add Task</h3>
            <form onSubmit={handleSubmit}>
                <label>Task Description:</label>
                <input value={description} placeholder="Type in Task Description" onChange={(e) => setDescription(e.target.value)}></input>
                <label>XP Amount: {'(1-100)'}</label>
                <input value={xp_amount} placeholder="Type in Valid XP Amount" type="number" min='1' max='100' onChange={(e) => setXpAmount(e.target.value)}></input>
                <label>Category</label>
                <select onChange={(e) => setCategoryName(e.target.value)}>
                    {categoryList.map((category) => {
                        return (<option key={category.id}>{category.name}</option>)

                    }
                    )}
                </select>
                <button>Create New Task</button>
            </form>
        </CreateFormDiv>
    )
}

let CreateFormDiv = styled.div`
`

export default CreateTaskForm;