import React from 'react'
import { FaAppleAlt, FaBullhorn, FaHeartbeat, FaDumbbell, FaFire } from 'react-icons/fa'

const Classes = props => {

  return (
    <div className="classes">
      <h2>PROGRAMS</h2>
      <div className="classes__content">
        <div className="classes__class">
          <div className="classes__content--1">
            <h3>CrossFit</h3>
            <p>CrossFit consists of constantly varied, functional movements performed at high intensities.  Each WOD (Workout of the Day) is designed to improve body composition by burning fat and building muscle.  Our coaches will guide you through weight training and/or cardio exercises. The best thing about CrossFit is that anyone can do it! Every workout can be safely scaled for beginning, intermediate, and advanced athletes.</p>
          </div>
          <div className="classes__icon"><FaHeartbeat /></div>
        </div>
        <div className="classes__class">
          <div className="classes__content--2">
            <h3>Pump 30/Burn 30</h3>
            <p>Our Pump & Burn classes are a great alternative or supplement to CrossFit.  Each is a 30-minute class, scheduled back-to-back so that you can come to one or both.<br/><br/> 

            <strong>PUMP 30</strong> is a total body workout that builds solid, lean muscle. An expert trainer will guide you through movements that utilize dumbbells, kettlebells, and your own bodyweight.<br/><br/> 
            
            <strong>BURN 30</strong> is a high-energy cardio workout that will get your heart rate up and keep it there.</p>
          </div>
          <div className="classes__icon"><FaFire /></div>
        </div>
        <div className="classes__class">
          <div className="classes__content--3">
            <h3>Barbell Club</h3>
            <p>Barbell Club is designed to increase your confidence and ability with barbell lifts. In a small class, you’ll receive specific feedback and expert instruction in proper technique, form, and movement. Barbell Club is perfect for anyone who wants to get more comfortable with the barbell or strengthen their competitive edge with Olympic lifts.</p>
          </div>
          <div className="classes__icon"><FaDumbbell /></div>
        </div>
        <div className="classes__class">
          <div className="classes__content--4">
            <h3>Healthy Habits Nutritional Coaching</h3>
            <p>Learn how to eat better without dieting or feeling deprived.  A qualified nutrition coach will show you how making small changes to your eating habits will lead to BIG changes in your overall health and body composition. You’ll get the education, support, and accountability you need to finally achieve your goals. Most importantly, you will establish healthy eating habits that will last a lifetime!</p>
          </div>
          <div className="classes__icon"><FaAppleAlt /></div>
        </div>
        <div className="classes_class">
          <div id="img" className="classes__content--5">
          </div>
        </div>
        <div className="classes__class">
          <div className="classes__content--6">
            <h3>Personal Training</h3>
            <p>Personal training ensures that you get coaching and programming that is specifically designed for your individual goals and abilities.  It provides a higher level of attention and accountability to ensure your success.</p>
          </div>
          <div className="classes__icon"><FaBullhorn /></div>
        </div>
      </div>
    </div>
  )
}

export default Classes