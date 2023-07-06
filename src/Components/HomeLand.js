import React from 'react'
import "./Style/HomeLand.css"
import SelfPhoto from "./Stock/portfolioimage.png"
import HomePageProjectCards from './HomePageProjectCards'
import Resume from "./Stock/Resume PNG.jpg"
import { gsap } from 'gsap'
import { useLayoutEffect, useEffect, useRef } from 'react'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase);
import fman from "./Stock/feedback.png"
import AnyFeedback from './AnyFeedback'

const virtualPrj = [
  {
    name: "ChatApp",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ullam numquam error ea officiis nobis possimus deleniti minima, veritatis amet unde"
  },
  {
    name: "CleverNote",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ullam numquam error ea officiis nobis possimus deleniti minima, veritatis amet unde"
  },
  {
    name: "Snake Game",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ullam numquam error ea officiis nobis possimus deleniti minima, veritatis amet unde"
  }

]



CustomEase.create("custom", "M0,0 C0.01,1.01 0,1 1,1.05");



const HomeLand = () => {



  useEffect(() => {

    gsap.to(".feedBackMan",{
      
      visibility:"visible",
      delay:5
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

    gsap.to(".hiBg", {
      width: "544px",
      repeat: -1,
      duration: 2
      // yoyo:true



    })

    gsap.to(".hiSideLandPage", {
      color: "white",
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

  const showTopicOnHover = ()=>{
    gsap.to(".AnyFeedbackAsk",{
      opacity:1,
      y:0,
      duration:0.5,
    })
  }

  const notShowTopicOnOut = ()=>{

    gsap.to(".AnyFeedbackAsk",{
      opacity:0,
      y:8,
      duration:0.1,
    })

  }
  const feedbackImg = useRef()
  const handleOnFeedClick= ()=>{
    feedbackImg.current.style.display = "none"

    gsap.to(".feedBackSenderFinalSection",{
      opacity:1,
      duration:0.3,
      scale:1
    })
  }


  return (
    <div>

      <div className="feedBackSide">
        <div  className="feedBackMan">
          <AnyFeedback/>
          <div ref={feedbackImg}  className="feedBackSectionImg">
            <div className="AnyFeedbackAsk">Any Feedback?</div>
            <img onClick={handleOnFeedClick} onMouseOver={showTopicOnHover} onMouseOut={notShowTopicOnOut} src={fman} alt="" />

          </div>
        </div>
      </div>
      <div className="navbarPortionLandDiv">
        <div className="emptNav"></div>
        <div className="navBarPortionLand">
          <div className="callNavSectionDiv"><i class="fa-solid fa-phone"></i></div>
          <div className="shareNavSectionDiv"><i class="fa-solid fa-share-nodes"></i> </div>
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
            <div className="hireMeBtnDiv"><button onMouseOver={handleOnHireOver} onMouseOut={handleOnHireOut} className='landPageBtn hiremeLandPageBtn'>Hire me <i className="fa-solid fa-arrow-right hireArrow"></i></button></div>
            <div className="DownloadCvLandPageBtnDiv"><button className='landPageBtn downloadLandPageBtn type1'>Download CV</button></div>
          </div>

        </div>

      </div>

      <div className="homePage2">
        <div className="shareLinkBtn">
          <div className="btnsMedia"><button className="mediaBtn"><i class="fa-brands fa-github"></i> Github</button></div>
          <div className="btnsMedia"><button className="mediaBtn"><i class="fa-brands fa-linkedin"></i> LinkedIn</button></div>
          <div className="btnsMedia"><button className="mediaBtn"><i class="fa-brands fa-instagram"></i> Instagram</button></div>
          <div className="btnsMedia"><button className="mediaBtn"><i class="fa-brands fa-instagram"></i> Instagram</button></div>
        </div>
        <div className="paraPage2Div">
          <p className="paraPage2LeftPara">
            Expertise Service<br />Let's check it out
          </p>
          <p className="paraPage2RightPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ullam numquam error ea officiis nobis possimus deleniti minima, veritatis amet unde in rem perferendis asperiores sit modi dolor doloribus, optio, dolore nulla consequuntur est similique doloremque voluptatum! Ducimus mollitia velit minus accusantium quod, cum nemo, non inventore</p>
        </div>
        <div className="projectShowingVirtualSection">
          <div className="virtualShowPrjHead"><h2>Projects</h2></div>
          <div className="virtualShowprj">
            {virtualPrj.map((i) => {
              return <HomePageProjectCards i={i} key={i} name={i.name} desc={i.desc} />
            })}
          </div>
          <div className="showMoreCards"><a href="" className='showMoreCardsInside'>Show More</a>
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