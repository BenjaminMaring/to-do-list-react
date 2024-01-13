import React from "react";
import '../app.css'

export default function List(props) {
    
    const tasksElem = props.list.data.map(task => {
            return (
                <div className="list--task-wrapper" key={task.taskId}>
                    <div className="list--task-title-wrapper">
                        <h6>{task.taskName}</h6>
                        <button onClick={() => props.toggleCompleted(props.list.id, task.taskId)} >{task.isCompleted 
                            ? <i className="fa-regular fa-square-check"></i> 
                            : <i className="fa-regular fa-square"></i>
                        }</button>
                    </div>
                    <p>{task.desc}</p>
                </div>
            )
        })

    return (
        <div className="list--wrapper">
            <div className="list--title">
                <h1>{props.list.name}</h1>
                <button><i className="fa-solid fa-ellipsis"></i></button>
            </div>
            {tasksElem}
        </div>
    )
}