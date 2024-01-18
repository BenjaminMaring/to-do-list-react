import React from 'react';
import '../app.css'

export default function Header({ updateSearch }) {
    

    return (
        <div className="header--wrapper">
            <div className="header--search-position">
                <div className="header--search-wrapper">
                    <input className="header--search" type="text" name="search" placeholder='Search' onChange={updateSearch}/>
                </div>
            </div>
        </div>
    )
}