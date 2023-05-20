import TaskListComponent from "../Components/TaskListComponent";
import { AiFillPlusCircle } from 'react-icons/ai';

import { userState } from "../atoms";
import { useRecoilValue } from "recoil";

function TaskListPage({ createModalClick }) {

    const user = useRecoilValue(userState)

    return (
        <div>
            <h1>Task List</h1>
            <div onClick={() => createModalClick()}>Add New Task <AiFillPlusCircle /></div>
            {user ? <div> <TaskListComponent /></div> : <p>Login to create or manage your Task List</p>}
        </div>
    )
}

export default TaskListPage;