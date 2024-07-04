'use client';
import React, { useEffect, useState } from 'react'
import "./chatbot.css"
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import gsap from 'gsap';
const tempChatData = [
  {
    from: "ai",
    msg: "Hi there!"
  },
]
const Chatbot = () => {
  const [clickBool, setClickBool] = useState(false)
  const [movingDuration, setMovingDuration] = useState(1.5)
  const [loadMover, setLoadMover] = useState(true)
  useEffect(() => {
    gsap.to(".lightningShadowChatinput", {
      left: "110%",
      duration: movingDuration,
      repeat: -1
    })

    return () => {

    }
  }, [])

  const [chatData, setChatData] = useState(tempChatData)
  const [promptText, setPromptText] = useState("")
  const [gettingResp, setGettingResp] = useState(false)

  const handleOnSendQuery = async (e) => {
    setGettingResp(true)
    e.preventDefault()
    setLoadMover(true)
    setClickBool(true)
    setMovingDuration(0.1)
    setChatData([...chatData, { from: "user", msg: promptText }])
    let temparray = chatData
    temparray.push({ from: "user", msg: promptText })
    const askQuery = async () => {

      const response = await fetch(`https://personal-metaragjs.vercel.app/metarag`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: promptText })
      })
      const json = await response.json()
      setChatData([...temparray, { from: "ai", msg: json.resp }])
      console.log(json)
    }
    
    await askQuery()
    setLoadMover(false)
    setClickBool(true)
    setGettingResp(false)
    setPromptText("")
  }
  const handleOnPromptChange = (e) => {
    setPromptText(e.target.value)
    console.log(promptText)
  }
  return (
    <div className='chatBoxOutDiv'>
      <div className='chatSection' style={{ height: clickBool ? '90%' : '15%' }}>
        {clickBool && <div className='closeChatBtn' onClick={(()=>{setClickBool(false)})}><CloseOutlined /></div>}
        {clickBool && <div className="upperChatArea">
          <div className='upperChatList' style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>{
            chatData.map((i, index) => {
              return <div>
                <hr style={{ backgroundColor: "#999", width: "100%", border: "0.2px solid rgb(104 104 104)" }} />
                <div style={{ display: 'flex', gap: "10px", alignItems: "flex-start" }}>

                  {i.from === "user" ? (<UserOutlined />) : (<div><button className='buttonChatIconMyPhoto'></button></div>)} <div style={{ width: "80%" }} className={i.from == "user" ? 'userMsg' : 'aiMsg'} key={index}>{i.msg}</div>
                </div>
              </div>
            })
          }</div>
        </div>}
        <form onSubmit={handleOnSendQuery} style={{ height: clickBool ? '20%' : "100%", padding: clickBool ? "2%" : "0%" }} className="lowerSendArea">
          <div className='lightningShadowChatinput' style={{display:loadMover?"block":"none"}}></div>
          <div className="sendInput"><input value={promptText} onChange={handleOnPromptChange} placeholder='What are your qualifications' type="text" /></div>
          <div className="sendButton"><button disabled={gettingResp} style={{fontWeight:"bold", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center", gap:"8px"}}> <span>Ask</span> <button className='aiLogoInAsk'></button></button></div>
        </form>
      </div>
    </div>

  )
}

export default Chatbot
