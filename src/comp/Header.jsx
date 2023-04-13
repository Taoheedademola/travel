import React, {useState} from "react";
import img from "../img/Troll.png"

function Head() {
      
   
    
    return(
        <div type="submit"  className="Navber">
            <div className="imgNav">
                <img className="NavImg" src={img} alt="" />
                <h1 className="NavText">Meme Generator</h1>
            </div>

            <span className="txt2">React Course-Project 3</span>
        </div>
    )
}

export default Head