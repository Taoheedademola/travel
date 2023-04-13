import React from "react";

function Real(props) {
    return(
        
    <div className="cont">
            <div className="name">
                <img src={props.imga} className="imga" alt="yyy"/>
            </div>
        <div className="text">
            
        <img className="idkkk" alt="" src={props.img} />
        <span className="pname">{props.pname}</span>
            <h1 className="bold">{props.bold}</h1>
            <span className="date">{props.date}</span>
            <p className="ptext">{props.ptext}</p>
        </div>
    </div>
    )
}

export default Real