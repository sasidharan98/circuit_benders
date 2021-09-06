import React, {useState} from "react";
import Chatbot from '../Chatbot/Chatbot';
import "./ConvoBot.css"

const ConvoBot = () => { 
  const [clicked, setClicked] = useState(false)
  const [imgpath, setImgPath] = useState("https://i.ibb.co/Kypdcb9/chatbot.png")
  const handleClick = () => {
    setImgPath((clicked)? "https://i.ibb.co/Kypdcb9/chatbot.png" : "https://i.ibb.co/9nhW2gh/button-close-icon-645944.png")
    setClicked((clicked)? false : true)

  }
  return (
    <div>
      {/* <div styles={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <h1></h1>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center',position: 'absolute', bottom: '30px', right: '30px' }}>
{/* 
      <i className =  {(clicked)? 'fa fa-close' : "fa fa-user"} style = {{  Width: '50px', Height: '50px' , fontSize:  '26px'}}onClick={handleClick}></i>
      <i className={(clicked)? '' : "fa fa-comment"}></i> */}
       <img  className="botimg" style = {{  Width: '50px', Height: '50px', maxWidth: '50px',maxHeight: '50px', zIndex :'10', filter: 'none'}}src={imgpath} alt="chat bot" onClick={handleClick} />

{clicked ? <Chatbot /> : null}
      </div>
    </div>
  )
}

export default ConvoBot
