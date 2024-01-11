import React from 'react';
import '../app.css'

export default function Header(props) {

    return (
        <div className="header--wrapper">
            <h2>To Do List</h2>
            <div className="header--search-position">
                <div className="header--search-wrapper">
                    <input className="header--search" type="text" name="search" placeholder='Search' onChange={props.filter}/>
                </div>
                <div className="header--search-answers">
                    test <br></br>
                    test <br></br>
                    test <br></br>
                    test <br></br>
                    test <br></br>
                    test <br></br>
                </div>
            </div>
            <div></div>
        </div>
    )
}