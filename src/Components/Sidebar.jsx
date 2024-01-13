import React from "react";
import '../app.css'

export default function Sidebar(props) {

          const personal = props.lists.filter(list => list.listType === "personal")
    const collaberations = props.lists.filter(list => list.listType === "collaboration")

    const personalElems = personal.map(list => {
        return <button onClick={props.changeList} 
                       id={list.id} 
                       key={list.id}
                       >{list.name}</button>
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
                <div className="sidebar--title-wrapper">
                    <h3>Your Lists</h3>
                    <button>+</button>
            </div>
                <div className="sidebar--list-wrapper">
                    {personalElems}
                </div>
                <div className="sidebar--title-wrapper">
                    <h3>Collaborations</h3>
                    <button >+</button>
                </div>
                <div className="sidebar--list-wrapper">
                    {collaberationElems}
                </div>
            </div>
        </div>
    )
}