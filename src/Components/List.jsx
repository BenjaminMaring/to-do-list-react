import React from "react";
import '../app.css'

export default function List(props) {
    const [showModal, setShowModal] = React.useState(false);
    

    function toggleModal() {
        setShowModal(prev => !prev);
    }

    const tasksElem = props.tasks.map(task => {
            return (
                <div className="list--task-wrapper" key={task.taskId}>
                    <div className="list--task-title-wrapper">
                        <div className="list-task-btn-wrapper">
                            <textarea 
                                className="list-task-title" 
                                value={task.taskName} 
                                onChange={(event) => {props.updateTaskName(event.target.value, task.taskId)}}></textarea>
                            </div>
                        <textarea 
                            className="list--task-desc" 
                            value={task.desc ? task.desc : "Please Enter A Description"}
                            onChange={(event) => {props.updateTaskDesc(event.target.value, task.taskId)}}></textarea>
                    </div>
                    {task.isCompleted 
                    ? <button className="list--end list--completed" onClick={() => props.toggleCompleted(props.listId, task.taskId)}>Complete</button>
                    : <button className="list--end list--incomplete" onClick={() => props.toggleCompleted(props.listId, task.taskId)}>Incomplete</button> }
                    <button className={"list--delete-task-btn"} onClick={(e) => props.deleteTask(e, task.taskId)}>Delete</button>
                </div>
            )
        })

    return (
        <div className="list--wrapper">
            <div className="list--title">
                <input type="text" placeholder="Please enter a name" value={props.listName} onChange={(event) => props.updateListName(event.target.value, props.listId)}></input>
                <div className="list--modal">
                    <button onClick={toggleModal}><i className="fa-solid fa-ellipsis"></i></button>
                    { showModal ? 
                    <div className="list--modal-options">
                        <ul>
                            <li><button onClick={props.addNewTask} className="list--new-task-btn list--options-btn">New Task</button></li>
                            <li><button onClick={props.deleteList} className="list--delete-list-btn list--options-btn">Delete List</button></li>
                        </ul>
                    </div>
                    : null}   
                </div>
            </div>
            <div className="list--card-wrapper">
            {tasksElem}
            </div>
        </div>
    )
}