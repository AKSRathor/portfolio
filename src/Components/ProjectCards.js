import React from 'react'


const ProjectCards = (props) => {
  return (
    <div className='projectDivSectionCardS'>
      
      <div className="projectImgCard"><div className="projfectImgCardBlacker"></div><img src={props.imgLink} alt="" /></div>
        <div className="projectNameCard"><h2>{props.name}</h2></div>
        <div className="projectDescCard"><p>{props.desc}</p></div>
        <div className="visitDivCard"><a href = {props.siteLink} target='_blank'><button className="visitNowProject">Visit</button></a></div>
    </div>
  )
}

export default ProjectCards