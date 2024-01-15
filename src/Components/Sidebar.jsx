import React from "react";
import '../app.css'

export default function Sidebar(props) {
    //filter the lists into two arrays depending on their list type
    const personal = props.lists.filter(list => list.listType === "personal")
    const collaberations = props.lists.filter(list => list.listType === "collaboration")

    //create the elemens for each list to be rendered into the DOM
    const personalElems = personal.map(list => {
        return <button onClick={props.changeList} 
                       id={list.id} 
                       key={list.id}
                       >{list.name ? list.name : "List"}</button>
    })
    const collaberationElems = collaberations.map(list => {
        return <button onClick={props.changeList} 
                       id={list.id} 
                       key={list.id}
                       >{list.name}</button>
    })
    
    return (
        <div className="sidebar--outer-wrapper">
            <div className="sidebar--inner-wrapper">
                <div className="sidebar-app-title">
                TaskWave
                </div>
                <div className="sidebar--list-title-wrapper">
                    <h3>Your Lists</h3>
                    <button onClick={() => {props.addList("personal")}}>+</button>
                </div>
                <div className="sidebar--list-wrapper">
                    {personalElems}
                </div>
                <div className="sidebar--list-title-wrapper">
                    <h3>Collaborations</h3>
                    <button onClick={() => {props.addList("collaboration")}}>+</button>
                </div>
                <div className="sidebar--list-wrapper">
                    {collaberationElems}
                </div>
            </div>
        </div>
    )
}