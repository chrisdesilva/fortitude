import React from "react"
import Img from "gatsby-image"

const Coaches = props => {
  return (
    <div className="coaches">
      <h2
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease-in-out"
      >
        Coaches
      </h2>
      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease-in-out"
        className="coaches__row"
      >
        <div className="coaches__photo">
          <Img fluid={props.athan} alt="Coach Athan" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Athan</h3>
          <p>
            Athan Schindler is a former U.S. Army Airborne Ranger. In addition
            to owning and coaching at two CrossFit gyms, he currently serves as
            a Master Fitness Trainer for the U.S. Army. But don’t be
            intimidated- Athan has a big smile and a big heart. His mission in
            life is to help others achieve optimal health, deep human
            connection, and self-actualization.
          </p>
          <p></p>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease-in-out"
        className="coaches__row"
      >
        <div className="coaches__photo">
          <Img fluid={props.kady} alt="Coach Kady" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Kady</h3>
          <p>
            Kady Skinner was voted the Best Fitness Instructor in Bastrop for
            2019. She has been coaching and competing in CrossFit for over seven
            years. Kady is knowledgeable, encouraging, and loud (in a good way).
            She’s a Fit Mom who believes that strength is beauty!
          </p>
          <p className="coaches__bio--cert">
            Certifications: Bachelor's in Applied Exercise Physiology from Texas
            A&M. NASM PT certification, Yoga 1 certification, CF L1, CF L2, CF
            kids, CF Endurance, USA weightlifting sports performance coach
          </p>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease-in-out"
        className="coaches__row"
      >
        <div className="coaches__photo">
          <Img fluid={props.cody} alt="Coach Cody" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Cody</h3>
          <p>
            Cody Skinner is the founder of Fortitude Barbell Club and Operations
            Manager at CrossFit Strive. With over seven years of experience in
            CrossFit and six years in competitive weightlifting, Cody is
            sometimes referred to as “the Yoda of the Barbell” due to his
            ability to break down and teach complex movements.
          </p>
          <p>
            Certifications: USAW Advanced Sport Performance Coach, CF L1, NASM
            CPT (expired)
          </p>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease-in-out"
        className="coaches__row"
      >
        <div className="coaches__photo">
          <Img fluid={props.lexi} alt="Coach Lexi" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Lexi</h3>
          <p>
            Lexi Grose is a former gymnast who fell in love with CrossFit in
            2017. After receiving her Level 1 certification, Lexi brought her
            passion for community and newly-achieved coaching skills back to
            Strive. She creates a training environment that is fun, focused, and
            challenging for everyone.
          </p>
          <p>Certifications: CF L1</p>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease-in-out"
        className="coaches__row"
      >
        <div className="coaches__photo">
          <Img fluid={props.jessica} alt="Coach Jessica" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Jessica</h3>
          <p></p>
          <p>
            Certifications: CF L1, CF Mobility Certificate, CF Gymnastics
            Certificate, Coached volleyball, basketball and track for 6 years
          </p>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease-in-out"
        className="coaches__row"
      >
        <div className="coaches__photo">
          <Img fluid={props.rebekah} alt="Coach Rebekah" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Rebekah</h3>
          <p>
            The most important training I have ever had though is being a crisis
            counselor for victims of domestic violence for 15 years. That is
            where I learned to meet a person's emotional needs and that now has
            brought me to a place at Strive where I can translate those tools
            into CrossFit and coaching.
          </p>
          <p>Certifications: CF L1</p>
        </div>
      </div>
      <div
        data-sal="fade"
        data-sal-duration="500"
        data-sal-easing="ease-in-out"
        className="coaches__row"
      >
        <div className="coaches__photo">
          <Img fluid={props.sarah} alt="Coach Sarah" />
        </div>
        <div className="coaches__bio">
          <h3>Coach Sarah</h3>
          <p>
            Sarah fell in love with fitness in 2014 after taking a weightlifting
            class in college. It eventually led her to Crossfit Strive, where
            she found home. She is passionate about evidence-based fitness,
            strength training, and having fun while training hard.
          </p>
          <p>
            Certifications: Bachelor's in Exercise and Sport Science with a
            concentration in Health and Fitness Management from Texas State
            (2020). NASM-CPT, CF L1
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coaches
