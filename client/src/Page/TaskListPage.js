import TaskListComponent from "../Components/TaskListComponent";
import { AiFillPlusCircle } from 'react-icons/ai';

import { userState } from "../atoms";
import { useRecoilValue } from "recoil";

function TaskListPage({ createModalClick }) {

    const user = useRecoilValue(userState)

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl my-5'>Task List</h1>
                <div className='flex flex-row justify-center items-center cursor-pointer' onClick={() => createModalClick()}>Add New Task <AiFillPlusCircle /></div>
            </div>

            {user ? <div> <TaskListComponent /></div> : <p>Login to create or manage your Task List</p>}
        </div>
    )
}

export default TaskListPage;