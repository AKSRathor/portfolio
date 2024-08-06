import React from 'react'
import "./Style/HomeLand.css"
import SelfPhoto from "./Stock/portfolioimage.png"
import HomePageProjectCards from './HomePageProjectCards'
import Resume from "./Stock/Resume PNG.jpg"
import { gsap } from 'gsap'
import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
import fman from "./Stock/feedback.png"
import AnyFeedback from './AnyFeedback'
import ProjectSection from './ProjectSection'
import HireMeForm from './HireMeForm'
import AlertSection from './AlertSection'
gsap.registerPlugin(ScrollTrigger)

gsap.registerPlugin(CustomEase);

const virtualPrj = [
  {
    name: "ChatApp",
    desc: "A real-time chatting web application made in the React Framework with Sockets, MongoDB, Express, BcryptJS, and CORS. All the data is saved in MongoDB, and real-time frontend messaging is enabled with the help of sockets. BcryptJS is used for encryption purposes to provide a strong password authentication service.",
    siteLink: "https://webchatbox.vercel.app/"
  },
  {
    name: "CleverNote",
    desc: "Introducing Evernote Clone, a stunning application that allows you to effortlessly save your notes, quicknotes, and tag them for easy organization. With the ability to save in labels, you can keep your thoughts neatly categorized. Experience the power of real-time functionality and lightning-fast performance with our complete MERN project. And to ensure your data remains secure, it offers a seamless signing authentication service.",
    siteLink: "https://clevernote.vercel.app/"
  },
  {
    name: "Snake Game",
    desc: "Immerse yourself in the nostalgia with a simple snake game that will transport you back in time. This project showcases the complete utilization of data structures and the application of algorithms, resulting in a captivating gaming experience. Crafted with HTML, CSS, and Javascript, this game is a true testament to the power of these technologies.",
    siteLink: "https://snakegame-gilt.vercel.app/"
  }

]



CustomEase.create("custom", "M0,0 C0.01,1.01 0,1 1,1.05");



const HomeLand = () => {
  const [textToAlert, setTextToAlert] = useState("")



  useEffect(() => {

    gsap.to(".feedBackMan", {

      visibility: "visible",
      delay: 5
    })

    gsap.to("#selfPhoto", {
      y: -8,
      duration: 0.7,
      repeat: -1,
      yoyo: true,
      // ease:"custom",
      // opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#selfPhoto",
        // start:"-260px top",
        // end:"bottom bottom",
        // markers: true,
        toggleActions: "restart reverse restart none",
        // markers:true
      },


    })

    gsap.to("#selfPhoto", {
      opacity: 1,
      // ease:"custom",
      scrollTrigger: {
        trigger: "#selfPhoto",
        // start:"-260px top",
        // end:"bottom bottom",
        // markers: true,
        toggleActions: "restart reverse restart none",
        // markers:true
      },


    })

    if(window.innerWidth >=730){

      gsap.to(".hiBg", {
        width: "544px",
        repeat: -1,
        duration: 2
        // yoyo:true
      })
  
      gsap.to(".namesideBG", {
        width: "544px",
        repeat: -1,
        duration: 2,
        delay: 1.5,
        // yoyo:true
  
  
  
      })
    }
    else if(window.innerWidth>=555){

      gsap.to(".hiBg", {
        width: "410px",
        repeat: -1,
        duration: 2
        // yoyo:true
  
  
  
      })
  
      gsap.to(".namesideBG", {
        width: "410px",
        repeat: -1,
        duration: 2,
        delay: 1.5,
        // yoyo:true
  
  
  
      })
    }

    else if(window.innerWidth >=400){
      gsap.to(".hiBg", {
        width: "350px",
        repeat: -1,
        duration: 2
        // yoyo:true
  
  
  
      })
  
      gsap.to(".namesideBG", {
        width: "350px",
        repeat: -1,
        duration: 2,
        delay: 1.5,
        // yoyo:true
  
  
  
      })
    }
    else{
      gsap.to(".hiBg", {
        width: "300px",
        repeat: -1,
        duration: 2
        // yoyo:true
  
  
  
      })
  
      gsap.to(".namesideBG", {
        width: "300px",
        repeat: -1,
        duration: 2,
        delay: 1.5,
        // yoyo:true
  
  
  
      })
    }


    gsap.to(".hiSideLandPage", {
      color: "white",
      repeat: -1,
      duration: 2
      // yoyo:true
    })


    gsap.to(".nameSideDiv", {
      color: "black",
      repeat: -1,
      duration: 2,
      delay: 1.5,
      // yoyo:true
    })
    gsap.to(".myNameIs", {
      color: "white",
      repeat: -1,
      duration: 2,
      delay: 1.5
      // yoyo:true
    })

    gsap.to(".mediaBtn", {
      scale: 1,
      stagger: 0.3,
      ease: "custom",
      duration: 0.8,
      scrollTrigger: {
        trigger: ".mediaBtn",
        // end:"top top",
        // start:"bottom bottom",
        // markers:true,
        toggleActions: "restart none restart none",

      }
    })

    gsap.to(".paraPage2LeftPara", {

      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: Power3.inOut,
      scrollTrigger: {
        trigger: ".paraPage2LeftPara",
        // end:"top top",
        // start:"bottom bottom",
        // markers:true,
        toggleActions: "restart none restart none",

      }
    })

    gsap.to(".paraPage2RightPara", {

      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: Power3.inOut,
      scrollTrigger: {
        trigger: ".paraPage2RightPara",
        // end:"top top",
        // start:"bottom bottom",
        // markers:true,
        toggleActions: "restart none restart none",

      }
    })



    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleOnHireOver = () => {
    gsap.to(".hireArrow", {
      x: "60px"
    })
    gsap.to(".hiremeLandPageBtn", {
      fontSize: "0.9em"
    })

  }

  const handleOnHireOut = () => {

    gsap.to(".hireArrow", {
      x: "0px"
    })
    gsap.to(".hiremeLandPageBtn", {
      fontSize: "0.8em"
    })

  }

  const showTopicOnHover = () => {
    gsap.to(".AnyFeedbackAsk", {
      opacity: 1,
      y: 0,
      duration: 0.5,
    })
  }

  const notShowTopicOnOut = () => {

    gsap.to(".AnyFeedbackAsk", {
      opacity: 0,
      y: 8,
      duration: 0.1,
    })

  }
  const feedbackImg = useRef()
  const handleOnFeedClick = () => {
    feedbackImg.current.style.display = "none"

    gsap.to(".feedBackSenderFinalSection", {
      opacity: 1,
      duration: 0.3,
      scale: 1
    })
  }

  const handleOnShowProjects = (e) => {
    e.preventDefault();
    gsap.to(".projectSectionWindow", {
      y: 0,
      duration: 0.5,
      ease: "power1.inOut"
    })
  }
  const hireMeRef = useRef()

  const handleOnHireMeClick = ()=>{
    hireMeRef.current.style.display = "flex"
    gsap.to(".hireMeContents",{
      opacity:1,
      rotateX:0,
      duration:0.2
  })
  }

  const handleOnShareClick = ()=>{
    navigator.clipboard.writeText("https://ashurathor.vercel.app/")
    setTextToAlert("Link Copied")
    showAlert()
  }
  const showAlert =()=>{
    gsap.to(".alertDiv",{
      opacity:1,
      duration:0
    })
    gsap.to(".alertDiv",{
      visibility:"visible",
      y: -10,
      duration:1
    })
    gsap.to(".alertDiv",{
      y:0,
      duration:1,
      delay:4,
      opacity:0
    })
    gsap.to(".alertDiv",{
      visibility:"hidden",
      delay:5.1
    })
  }

  return (
    <div>
      <AlertSection textToAlert  = {textToAlert}/>
      <ProjectSection />
      <HireMeForm hireMeRef = {hireMeRef}/>

      <div className="feedBackSide">
        <div className="feedBackMan">
          <AnyFeedback />
          <div ref={feedbackImg} className="feedBackSectionImg">
            <div className="AnyFeedbackAsk">Any Feedback?</div>
            <img className='fmanImg' onClick={handleOnFeedClick} onMouseOver={showTopicOnHover} onMouseOut={notShowTopicOnOut} src={fman} alt="" />

          </div>
        </div>
      </div>
      <div className="navbarPortionLandDiv">
        <div className="emptNav"></div>
        <div className="navBarPortionLand">
          <div className="callNavSectionDiv"><a href="mailto:mail.online.ayush@gmail.com"><i class="fa-solid fa-envelope"></i></a></div>
          <div className="shareNavSectionDiv" onClick={handleOnShareClick}><i class="fa-solid fa-share-nodes"></i> </div>
        </div>

      </div>
      <div className="wholeLandPage">
        <div className="nameWithPhoto">
          <div className="onlyNameWithPhoto">
            <div className="allContain">
              <div className="hiBg"></div>
              <div className="nameSide hiSideLandPage" >Hi </div>
              <div className="namesideBG"></div>
              <div className='nameSide nameSideDiv'>I am <span className='myNameIs'>Ayush</span></div>

            </div>
            <div className="photoSide"><img id='selfPhoto' src={SelfPhoto} alt="" /></div>

          </div>
          <div className="LandPageBtns">
            <div className="hireMeBtnDiv"><button onMouseOver={handleOnHireOver} onClick={handleOnHireMeClick} onMouseOut={handleOnHireOut} className='landPageBtn hiremeLandPageBtn'>Hire me <i className="fa-solid fa-arrow-right hireArrow"></i></button></div>
            <a href='https://drive.google.com/file/d/1mw1iCo5qhj6TsPjj16eRp4_GJxblkyH-/view?usp=sharing' target='_blank' className="DownloadCvLandPageBtnDiv"><button className='landPageBtn downloadLandPageBtn type1'>Download CV</button></a>
          </div>

        </div>

      </div>

      <div className="homePage2">
        <div className="shareLinkBtn">
          <div className="btnsMedia"><a href="https://github.com/aksrathor" target='_blank'><button className="mediaBtn"><i class="fa-brands fa-github"></i> Github</button></a></div>
          <div className="btnsMedia"><a href="https://leetcode.com/aksr2003_ayush/" target='_blank'><button className="mediaBtn"><svg className='leetcodeSvg' fill="#ffffff" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>LeetCode icon</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path></g></svg> Leetcode</button></a>
          </div>
          <div className="btnsMedia"><a href="https://www.linkedin.com/in/ayush-rathor/" ><button className="mediaBtn"><i class="fa-brands fa-linkedin"></i> LinkedIn</button></a></div>
          <div className="btnsMedia"><a href="https://www.instagram.com/a_k_s_rathor/" target='_blank'><button className="mediaBtn"><i class="fa-brands fa-instagram"></i> Instagram</button></a></div>
        </div>
        <div className="paraPage2Div">
          <p className="paraPage2LeftPara">
            Expertise Service<br />Let's check it out
          </p>
          <p className="paraPage2RightPara">Welcome to my digital showcase! Here, you'll find a curated collection of my web development projects. Let's collaborate and create a website that truly represents your unique brand.</p>
        </div>
        <div className="projectShowingVirtualSection">
          <div className="virtualShowPrjHead"><h2>Projects</h2></div>
          <div className="virtualShowprj">
            {virtualPrj.map((i) => {
              return <HomePageProjectCards i={i} key={i} name={i.name} desc={i.desc} siteLink={i.siteLink} />
            })}
          </div>
          <div className="showMoreCards"><a onClick={handleOnShowProjects} href="" className='showMoreCardsInside'>Show More</a>
          </div>
        </div>
      </div>
      <div className="homePage3">
        <div className="portfolioSideResumeImg"><img className='resumeImg' src={Resume} alt="" /></div>
      </div>
    </div>
  )
}

export default HomeLand
