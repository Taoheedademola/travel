import React from "react";
import path from "../img/lk.png"

function Head() {
    return(
        <div className="header">
            <img src={path} className="imgp" alt="path"/>
        <span className="header-text">my travel journal</span>
        </div>
    )
}

export default Head