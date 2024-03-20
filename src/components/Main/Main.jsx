
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Danielnazet AI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Daniel.</span></p>
          <p>How Can I help You?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beatifull place to see in Poland</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Show me Your skills</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>What is JavaScript?</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>IT what I must know?</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter your question'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>  
        </div>
      <p className="bottom-info">
        Danielnazet AI info about people and world</p>
        </div>
      </div>
    </div>
  )
}

export default Main