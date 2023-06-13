const ProgressBar = ({ widthPercent }) => {
    return (
        <progress className='w-full border-black border-2' value={widthPercent} max='100'></progress>
    )
}

export default ProgressBar