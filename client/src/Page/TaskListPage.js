import TaskListComponent from "../Components/TaskListComponent";

import { userState } from "../atoms";
import { useRecoilValue } from "recoil";

function TaskListPage() {
    const user = useRecoilValue(userState)
    return (
        <div>
            <h1>Task List</h1>
            {user ? <TaskListComponent /> : <p>Login to create or manage your Task List</p>}
        </div>
    )
}

export default TaskListPage;