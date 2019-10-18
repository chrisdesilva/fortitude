import React from 'react'

const LeadContent = props => {
  return (
    <div className="leadContent">
      <h1>
        <span className="leadContent__span">You’ll sweat. </span> 
        <span className="leadContent__span">You’ll laugh. </span> 
        <span className="leadContent__span">You’ll get stronger. </span> 
        <span className="leadContent__span">We promise.</span> 
      </h1>
      <button onClick={props.onClick} className="btn btn--hero">Sign Me Up</button>
    </div>
  )
}

export default LeadContent