import React from 'react'
import "./Style/HomePageProjectCards.css"
import { gsap } from 'gsap'
import { useLayoutEffect, useEffect } from 'react'
import { ScrollTrigger,CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase);

const HomePageProjectCards = (props) => {

  useEffect(() => {
    
    gsap.to(".cardProjectVirtual", {
      y: 0,
      opacity:1,
      duration: 0.3,
      stagger:0.5,
      scrollTrigger: {
        trigger: ".cardProjectVirtual",
        toggleActions: "restart none none none",
      },

      
    })
    
    return () => {
      
    }
  }, [])
  

  return (
    <div className='cardProjectVirtual'>
        <div className="projectCardHeading" style={{fontWeight:"bold"}}>{props.name}</div>
        <div className="ProjectCardDesc"><p>{props.desc}</p></div>
        <div className="visitDivCard"><a href={props.siteLink} target='_blank'><button className="visitNowProject">Visit</button></a></div>
    </div>
  )
}

export default HomePageProjectCards