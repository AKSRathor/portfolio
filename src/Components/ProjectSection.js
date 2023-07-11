import React from 'react'
import "./Style/ProjectSection.css"
import ProjectCards from './ProjectCards'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase);

const allPrjList = [
  {
    name: "ChatApp",
    desc: "A real-time chatting web application made in the React Framework with Sockets, MongoDB, Express, BcryptJS, and CORS. All the data is saved in MongoDB, and real-time frontend messaging is enabled with the help of sockets. BcryptJS is used for encryption purposes to provide a strong password authentication service.",
    imgLink: 'https://imgur.com/bTcSGLB.png',
    siteLink: "https://webchatbox.vercel.app"
  },
  {
    name: "CleverNote",
    desc: "Introducing Evernote Clone, a stunning application that allows you to effortlessly save your notes, quicknotes, and tag them for easy organization. With the ability to save in labels, you can keep your thoughts neatly categorized. Experience the power of real-time functionality and lightning-fast performance with our complete MERN project. And to ensure your data remains secure, it offers a seamless signing authentication service.",
    imgLink: 'https://imgur.com/q1ZdMKI.png',
    siteLink: "https://clevernote.vercel.app/"
  },
  {
    name: "Snake Game",
    desc: "Immerse yourself in the nostalgia with a simple snake game that will transport you back in time. This project showcases the complete utilization of data structures and the application of algorithms, resulting in a captivating gaming experience. Crafted with HTML, CSS, and Javascript, this game is a true testament to the power of these technologies.",
    imgLink: 'https://imgur.com/rk13iFX.png',
    siteLink: "https://snakegame-gilt.vercel.app"
  },
  {
    name: "MedEx - Online Patient's Login Portal",
    desc: "Introducing a remarkably powerful website with an exquisitely user-friendly interface. Crafted with React, Firebase, MongoDB, and Express, this platform empowers individuals to effortlessly book appointments online, seek expert advice through online queries, and access a wealth of health articles. Moreover, patients can conveniently view their personal information, prescribed medication, and billing history, all in one secure and seamless platform.",
    imgLink: 'https://imgur.com/u9AztSS.png',
    siteLink: "https://medexfrontend.vercel.app"
  },
  {
    name: "VerifyBharat - Blockchain Certificate Organiser",
    desc: "Introducing an exceptionally robust protocol designed to revolutionize the way you save, share, organize, and verify your documents. Harnessing the power of cutting-edge blockchain technology, this platform ensures unparalleled security and immutability for your valuable files. Each document is fortified with the unbreakable shield of blockchain and fortified login encryptions, guaranteeing the utmost protection. The frontend is expertly developed using ReactJS with the seamless integration of GSAP for stunning visual effects. On the backend, we have harnessed the power of NodeJS, ExpressJS, MongoDB, and Solidity, creating a formidable foundation for this groundbreaking solution.",
    imgLink: 'https://imgur.com/bTcSGLB.png',
    siteLink: "https://webchatbox.vercel.app"
  },
  {
    name: "TeamZenith - Full Stack Website",
    desc: "Introducing the Racing Society of DSEU, a dynamic organization that boasts an impressive array of achievements, works, and sponsors. All of this valuable information is meticulously stored and showcased on their website, which has been meticulously crafted using the powerful MERN stack. This comprehensive platform seamlessly integrates MongoDB, Express, React, and Node.js, resulting in a visually stunning and highly functional website that truly captures the essence of the Racing Society's success.",
    imgLink: 'https://imgur.com/nv0EKwm.png',
    siteLink: "https://teamzenith.vercel.app/"
  },
  {
    name: "Tic-Tac-Toe Game",
    desc: "Experience the timeless joy of a simple yet captivating Tic-tac-toe game, meticulously crafted using the trifecta of HTML, CSS, and Javascript. This delightful game showcases the pure essence of algorithmic brilliance, providing endless hours of strategic entertainment",
    imgLink: 'https://imgur.com/R9tLqE7.png',
    siteLink: "https://tic-tac-toe-steel-nine.vercel.app"
  },
  {
    name: "Live Weather Report",
    desc: "Discover the wonders of weather forecasting with this exceptional website. Powered by the fetching method and API keys, this innovative platform built with ReactJS offers a seamless and immersive weather-checking experience. With the integration of the remarkable npm package, Chart.js, you can visualize weather data in stunning and interactive charts. Stay informed and captivated as you explore the ever-changing weather patterns through this beautifully designed and feature-rich website.",
    imgLink: 'https://imgur.com/MXYsLdY.png',
    siteLink: "https://weathervalentime.vercel.app/"
  },
  {
    name: "News App",
    desc: "Introducing a captivating daily news app, meticulously crafted using the power of ReactJS. This innovative platform seamlessly fetches the latest news from the renowned API provider, https://newsapi.org/. Immerse yourself in a world of real-time information as you explore a vast array of news articles, curated to keep you informed and engaged.",
    imgLink: 'https://imgur.com/bTcSGLB.png',
    siteLink: "https://news-app-ivory-five.vercel.app/"
  },

  

]

const handleOnProjectOut = ()=>{
  gsap.to(".projectSectionWindow", {
    y:"101vh",
    duration:0.7
  })
}


const ProjectSection = () => {
  return (
    <div className="projectSectionWindow">
      <div onClick={handleOnProjectOut} className="closeTabOut"><i class="fa-solid fa-xmark"></i></div>
      <div className='projectHead'>

        <h1>Projects</h1>

      </div>
      <div className="completeCardSection">
        {allPrjList.map((i, index) => {
          return <ProjectCards i={i} key={index} name={i.name} desc={i.desc} imgLink={i.imgLink} siteLink={i.siteLink} />
        })}

      </div>
    </div>
  )
}

export default ProjectSection