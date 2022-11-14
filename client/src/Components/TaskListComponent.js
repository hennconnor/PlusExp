import { userState } from '../atoms';
import { useRecoilValue } from 'recoil';
import TaskItem from './TaskItem.js';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function TaskListComponent() {

    const user = useRecoilValue(userState)
    const tasks = user.tasks

    return (
        <DragDropContext>
            <Droppable droppableId="Tasks">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => {
                            const id = task.id
                            const textId = id.toString()
                            return (
                                <Draggable key={id} draggableId={textId} index={index}>
                                    {(provided) => (
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <TaskItem description={task.description} xp_amount={task.xp_amount} />
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default TaskListComponent;