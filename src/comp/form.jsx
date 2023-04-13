import React, {useState} from "react";
import memesData from "../comp/meme.js"
function Form() {
    
  const [meme, setMeme]=useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/30b1gx.jpg"
  })
  const [allMemeImage, setAllMemeImage]=useState(memesData)
  const [inputData, setInputData]=useState({
    topTexts: "",
    bottomTexts:"",
    check: true
  })



    function HandleClick() {
        const imageArray=allMemeImage.data.memes
        const randomNumber=Math.floor(Math.random()*imageArray.length)
        const URL=imageArray[randomNumber].url
        setMeme(preValue =>({
            ...preValue,
            randomImage: URL
        }))
    }

    function HandleChange(event) {
        const {name, value}=event.target 

        setInputData(preValue =>{
            return{
                ...preValue,
                [name]:  value 
            }
        })
    }

    return(
        <div>
            <div className="form">

            <input onChange={HandleChange} type="text" value={inputData.topTexts}  name="topTexts" placeholder="Shut up"/>
            <input onChange={HandleChange} name="bottomTexts" value={inputData.bottomTexts}  type="text" placeholder="and take my money"/>
            <button    onClick={HandleClick} className="btn">Get a new meme image 🖼</button>
            </div>
            <img id="Hl" src={meme.randomImage} alt="" />
        </div>
    )
}

export default Form
