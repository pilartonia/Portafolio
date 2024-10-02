import '../styles/NavBar.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const NavBar=()=>{
 const Navigate = useNavigate();
    
    return(
        <header className="wrapper">
            <nav className="NavBar">
                <div className="option"><a onClick={() => Navigate("/Home")}>Home</a></div>
                <div className="option"><a onClick={() => Navigate("/Projects")}>Projects</a></div>
                <div className="option"><a onClick={() => Navigate("/Contact")} >Contact</a></div>
            </nav>
        </header>
    )
    
}

export default NavBar;