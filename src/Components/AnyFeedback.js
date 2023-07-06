import React from 'react'
import "./Style/AnyFeedback.css"
import { gsap } from 'gsap'
import { useLayoutEffect, useEffect } from 'react'
import { ScrollTrigger, CustomEase} from 'gsap/all'
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(MotionPathPlugin);
// MotionPathHelper.create(".send")

const AnyFeedback = () => {

    
    
const handleOnSendClick = ()=>{
    gsap.to(".send", {
        duration:3,
        scale:10,
        // x:-1500,
        // y:-700,
        // rotateZ:90,
        ease:"Power1.inOut",
        motionPath:{
            path: "#path",
            align: ".send",
            autoRotate: true,
            // alignOrigin: [0.5, 0.5]
          },
    })

    gsap.to(".send", {
        delay:3,
        opacity:0,
        duration:0.1
    })
    gsap.to(".feedBackSenderFinalSection",{
        delay:2.8,
        size:0,
        opacity:0
    })
    gsap.to(".feedBackSenderFinalSection",{
        visibility:"hidden",
        delay:3
    })

}

    return (
        <div className='feedBackSenderFinalSection'>
            <div class="sender-area">
                <div class="input-place">
                    <input placeholder="Send Your Feedback" class="send-input" type="text" />
                    <path id="path" d="m1357.46,768.19c-59.27-3.94-143.72-13.54-243-39-8.81-2.26-37.83-9.79-70-20-109.33-34.68-242.65-76.98-332-169-99.16-102.13-153.31-274.94-100-327,37.78-36.89,136.05-21.86,159,24,36.11,72.17-96.66,256.01-231,283C370.59,554.32,147,347.96.46.19"/>
                    <div class="send" onClick={handleOnSendClick}>
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnyFeedback