import React from 'react'
import "./Style/AlertSection.css"
import { useState } from 'react'

const AlertSection = (props) => {
  return (
    <div className="alertOuterDiv">
        <div className='alertDiv'>{props.textToAlert}</div>

    </div>
  )
}

export default AlertSection