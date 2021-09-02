import React, {useState} from "react";
import Chatbot from '../Chatbot/Chatbot';
import "./ConvoBot.css"

const ConvoBot = () => { 
  const [clicked, setClicked] = useState(false)
  const [imgpath, setImgPath] = useState("./img/chatbot.png")
  const handleClick = () => {
    setImgPath((clicked)? "./img/chatbot.png" : "./img/close.png")
    setClicked((clicked)? false : true)

  }
  return (
    <div>
      {/* <div styles={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <h1></h1>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center',position: 'absolute', bottom: '30px', right: '30px' }}>

      <img  className="botimg" style = {{  Width: '50px', Height: '50px', maxWidth: '50px',maxHeight: '50px'}}src={imgpath} alt="chat bot" onClick={handleClick} />
{clicked ? <Chatbot /> : null}
      </div>
    </div>
  )
}

export default ConvoBot
