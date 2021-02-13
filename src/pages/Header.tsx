import React from "react";
import "./Header.css"
    export default function Header (){
        return(
            <div>
             <nav className="nav">
    <div className="container">
        <div className="logo">
            <a href="#logo">YourLogo</a>
        </div>
        <div className="main_list" id="mainListDiv">
            <ul>
                <li><a href="#cc">Home</a></li>
                <li><a href="#cc">About</a></li>
                <li><a href="#cc">my work</a></li>
                <li><a href="#cc">disegn</a></li>
                <li><a href="#cc">dcontact</a></li>
            </ul>
        </div>
        <div className="media_button">
            <button className="main_media_button" id="mediaButton">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>
            </div>
        )
        }