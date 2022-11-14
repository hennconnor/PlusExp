import { userState } from '../atoms';
import { useRecoilValue, useRecoilState } from 'recoil';
import TaskItem from './TaskItem.js';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function TaskListComponent() {

    const [user, setUser] = useRecoilState(userState)
    const tasks = user.tasks

    function handleOnDragEnd(result) {
        const currentUser = { ...user }
        const currentUserTasks = Array.from(currentUser.tasks)
        const reorderedTask = currentUserTasks.splice(result.source.index, 1)
        currentUserTasks.splice(result.destination.index, 0, reorderedTask)
        currentUser.tasks = currentUserTasks
        setUser(currentUser)
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
                                        < div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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