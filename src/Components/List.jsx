import React from "react";
import '../app.css'

export default function List(props) {
    
    const tasksElem = props.list.data.map(task => {
            return (
                <div className="list--task-wrapper" key={task.taskId}>
                    <div className="list--task-title-wrapper">
                        <input 
                            className="list-task-title" 
                            
                            value={task.taskName} 
                            onChange={(event) => {props.updateTaskName(event.target.value, task.taskId)}}></input>
                        <textarea 
                            className="list--task-desc" 
                            value={task.desc ? task.desc : "Please Enter A Description"}
                            onChange={props.updateTaskDesc}></textarea>
                    </div>
                    {task.isCompleted 
                    ? <button className="list--end list--completed" onClick={() => props.toggleCompleted(props.list.id, task.taskId)}>Complete</button>
                    : <button className="list--end list--incomplete" onClick={() => props.toggleCompleted(props.list.id, task.taskId)}>Incomplete</button> }
                </div>
            )
        })

    return (
        <div className="list--wrapper">
            <div className="list--title">
                <input type="text" placeholder="Please enter a name" value={props.list.name} onChange={(event) => props.updateListName(event.target.value, props.list.id)}></input>
                <button><i className="fa-solid fa-ellipsis"></i></button>
            </div>
            <div className="list--card-wrapper">
            {tasksElem}
            </div>
        </div>
    )
}