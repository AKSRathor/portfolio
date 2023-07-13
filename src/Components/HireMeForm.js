import React from 'react'
import "./Style/HireMeForm.css"
import { gsap } from 'gsap'
import { useRef, useState } from 'react'

const host = "https://ashurathorbackend.vercel.app"

const HireMeForm = (props) => {

    const handleToCloseHireWindow = () => {
        gsap.to(".hireMeContents", {
            opacity: 0,
            rotateX: 50,
            duration: 0.2
        })
        setTimeout(() => {
            props.hireMeRef.current.style.display = "none"
        }, 200);
    }
    const [hireState, setHireState] = useState(
        {
            recName: "",
            recPesha: "",
            recCompany: "",
            jobOffering: "",
            anythingElse: "",
            recEmail: "",
            recPhone: "",
            greeting1: "",
            greeting2: "",
        }
    )
    const handleOnFormSend = (e) => {
        e.preventDefault()
        const sendForm = async () => {

            const response = await fetch(`${host}/api/hireme/hiresend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recName:hireState.recName, recPesha:hireState.recPesha, recCompany:hireState.recCompany, jobOffering:hireState.jobOffering, anythingElse:hireState.anythingElse, recEmail:hireState.recEmail, recPhone:hireState.recPhone, greeting1:hireState.greeting1, greeting2:hireState.greeting2 })
            })
            const json = await response.json()
            console.log(json)
        }
        sendForm();
    }

    const handleOnTextChange = (e)=>{
        setHireState({...hireState, [e.target.name]:e.target.value})
        console.log(hireState)
    } 
    return (
        <div ref={props.hireMeRef} className='hireMeForm'>
            <div className="hireMeBg" onClick={handleToCloseHireWindow}></div>
            <form className="hireMeContents">
                <i className="fa-solid fa-xmark closeHireWindow" onClick={handleToCloseHireWindow}></i>

                <h1 className='getInTouchH'>Get in Touch</h1>
                <p>
                    Hi Ayush<br />
                    I hope this message finds you well. My name is
                    <input className='hireMeInput compulsaryInp' onChange = {handleOnTextChange} name='recName' autocomplete="off" placeholder='Keshav' type="text" required />
                    <input className='hireMeInput compulsaryInp' onChange = {handleOnTextChange} name='recPesha' autocomplete="off" placeholder='Recruiter' type="text" required />,
                    and I represent
                    <input placeholder='XYZ Company' onChange = {handleOnTextChange} autocomplete="off" name='recCompany' className='hireMeInput compulsaryInp' type="text" required />.
                    I am reaching out to you today because we have an exciting opportunity for a
                    <input className='hireMeInput compulsaryInp' onChange = {handleOnTextChange} name='jobOffering' autocomplete="off" placeholder='Web Developer' type="text" required />
                    within our organization. We believe that your unique skills and expertise would be a valuable addition to our team. We would love to discuss this opportunity further and learn more about your experience and availability. If you are interested and available, we kindly request you to let us know your preferred time for a conversation.
                    <input className='hireMeInput' onChange = {handleOnTextChange} name='anythingElse' autocomplete="off" type="text" /><br />
                    You can reach me at
                    <input className='hireMeInput compulsaryInp' onChange = {handleOnTextChange} name='recEmail' autocomplete="off" placeholder='Keshav@email.com' type="email" required />
                    or call me directly at
                    <input className='hireMeInput' name='recPhone' onChange = {handleOnTextChange} autocomplete="off" placeholder='999999999' type="text" /><br />
                    Thank you for considering this invitation, and we look forward to the possibility of working together.
                    Warm regards,<br />
                    <input className='hireMeInput' name='greeting1' onChange = {handleOnTextChange} autocomplete="off" placeholder='Keshav Recruiter' type="text" /><br />
                    <input className='hireMeInput' name='greeting2' onChange = {handleOnTextChange} autocomplete="off" placeholder='XYZ Company' type="text" />
                </p>
                <button className='hireMeSend' onClick={handleOnFormSend}>Send <svg className='sendSvg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path></svg></button>
            </form>
        </div>
    )
}

export default HireMeForm