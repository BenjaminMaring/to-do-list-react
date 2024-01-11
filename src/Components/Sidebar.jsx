import React from "react";
import '../app.css'

export default function Sidebar(props) {

    const personalLists = props.lists.personal_lists.map(item => {
        return <button onClick={props.goToList} id={item.id} key={item.id}>{item.listName}</button>
    })
    const collaberations = props.lists.collaborations.map(item => {
        return <button onClick={props.goToList} id={item.id} key={item.id}>{item.listName}</button>
    })

    return (
        <div className="sidebar--outer-wrapper">
            <div className="sidebar--inner-wrapper">
                <div className="sidebar--title-wrapper">
                    <h3>Your Lists</h3>
                    <button onClick={() => {props.add("personal_lists")}}>+</button>
            </div>
                <div className="sidebar--list-wrapper">
                    {personalLists}
                </div>
                <div className="sidebar--title-wrapper">
                    <h3>Collaborations</h3>
                    <button onClick={() => {props.add("collaborations")}}>+</button>
                </div>
                <div className="sidebar--list-wrapper">
                    {collaberations}
                </div>
            </div>
        </div>
    )
}