function TaskItem({ description, xp_amount }) {
    return (
        <div>
            <h3>{description}</h3>
            <p>xp amount: {xp_amount}</p>
        </div>
    )
}

export default TaskItem;