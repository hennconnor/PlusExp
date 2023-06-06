import { userState } from '../atoms';
import { useRecoilState } from 'recoil';
import TaskItem from './TaskItem.js';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function TaskListComponent() {

    const [user, setUser] = useRecoilState(userState)
    const tasks = user.tasks

    // function sortTasks() {
    //     const taskCopy = [...user.tasks]
    //     const sortedTasks = taskCopy.sort((taskA, taskB) => (taskA.ranking - taskB.ranking))
    //     return sortedTasks;
    // }




    function handleOnDragEnd(result) {

        const currentUser = { ...user }
        const currentUserTasks = Array.from(currentUser.tasks)
        const [reorderedTask] = currentUserTasks.splice(result.source.index, 1)
        currentUserTasks.splice(result.destination.index, 0, reorderedTask)
        currentUser.tasks = currentUserTasks
        setUser(currentUser)

        // currentUserTasks.map((task, index) => {
        //     fetch(`tasks/${task.id}`, {
        //         method: "PATCH",
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             ranking: index
        //         })
        //     }).then(r => r.json())
        // })
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="Tasks">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => {
                            const id = task.id
                            const textId = id.toString()
                            return (
                                <Draggable key={id} draggableId={textId} index={index}>
                                    {(provided) => (
                                        < div className='flex  items-center justify-center flex-col' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <TaskItem description={task.description} xp_amount={task.xp_amount} task={task} />
                                        </div>
                                    )
                                    }
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext >
    )
}

export default TaskListComponent;