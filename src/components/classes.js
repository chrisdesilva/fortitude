import React from 'react'

const Classes = props => {

  return (
    <div className="classes">
      <h2>CLASSES</h2>
      <div className="classes__content">
        <div className="classes__class">
          <h3>CrossFit</h3>
          <p>CrossFit consists of constantly varied, functional movements performed at high intensities.  Each WOD (Workout of the Day) is designed to improve body composition by burning fat and building muscle.  Our coaches will guide you through weight training and/or cardio exercises. The best thing about CrossFit is that anyone can do it! Every workout can be safely scaled for beginning, intermediate, and advanced athletes.</p>
        </div>
        <div className="classes__class">
          <h3>Pump 30/Burn 30</h3>
          <p>Our Pump & Burn classes are a great alternative or supplement to CrossFit.  Each is a 30-minute class, scheduled back-to-back so that you can come to one or both.<br/><br/> 

          <strong>PUMP 30</strong> is a total body workout that builds solid, lean muscle. An expert trainer will guide you through movements that utilize dumbbells, kettlebells, and your own bodyweight.<br/><br/> 
          
          <strong>BURN 30</strong> is a high-energy cardio workout that will get your heart rate up and keep it there.</p>
        </div>
        <div className="classes__class">
          <h3>Barbell Club</h3>
          <p>Barbell Club is designed to increase your confidence and ability with barbell lifts. In a small class, you’ll receive specific feedback and expert instruction in proper technique, form, and movement. Barbell Club is perfect for anyone who wants to get more comfortable with the barbell or strengthen their competitive edge with Olympic lifts.</p>
        </div>
      </div>
      <button id="classBtn" onClick={props.onClick} className="btn btn--primary">Sign Me Up</button>
    </div>
  )
}

export default Classes