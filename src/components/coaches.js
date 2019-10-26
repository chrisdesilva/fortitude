import React from 'react'
import Img from 'gatsby-image'

const Coaches = props => {

  return (
    <div className="coaches">
    <h2 data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out">Coaches</h2>
      <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease-in-out" className="coaches__row">
        <div className="coaches__photo">
          <Img fluid={props.athan} alt="Coach Athan" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Athan</h3>
          <p>Athan Schindler is a former U.S. Army Airborne Ranger. In addition to owning and coaching at two CrossFit gyms, he currently serves as a Master Fitness Trainer for the U.S. Army.  But don’t be intimidated- Athan has a big smile and a big heart. His mission in life is to help others achieve optimal health, deep human connection, and self-actualization.
          </p>
        </div>
      </div>
      <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease-in-out" className="coaches__row">
        <div className="coaches__photo">
          <Img fluid={props.kady} alt="Coach Kady" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Kady</h3>
          <p>Kady Skinner was voted the Best Fitness Instructor in Bastrop for 2019. She has been coaching and competing in CrossFit for over seven years. Kady is knowledgeable, encouraging, and loud (in a good way).  She’s a Fit Mom who believes that strength is beauty!
          </p>
        </div>        

      </div>
      <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease-in-out" className="coaches__row">
        <div className="coaches__photo">
          <Img fluid={props.cody} alt="Coach Cody" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Cody</h3>
          <p>Cody Skinner is the founder of Fortitude Barbell Club and Operations Manager at CrossFit Strive.  With over seven years of experience in CrossFit and six years in competitive weightlifting, Cody is sometimes referred to as “the Yoda of the Barbell” due to his ability to break down and teach complex movements.
          </p>
        </div>
      </div>
      <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease-in-out" className="coaches__row">
        <div className="coaches__photo">
          <Img fluid={props.lexi} alt="Coach Lexi" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Lexi</h3>
          <p>Lexi Grose is a former gymnast who fell in love with CrossFit in 2017. After receiving her Level 1 certification, Lexi brought her passion for community and newly-achieved coaching skills back to Strive.  She creates a training environment that is fun, focused, and challenging for everyone.
          </p>
        </div>        

      </div>
    </div>
  )
}

export default Coaches