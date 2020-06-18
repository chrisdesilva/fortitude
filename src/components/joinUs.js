import React from "react"
import Img from "gatsby-image"
import { Collapse } from "react-collapse"
import { FaCheckSquare } from "react-icons/fa"

const JoinUs = props => {
  return (
    <div className="joinUs">
      <h1>Fortitude Strength & Conditioning</h1>
      <p>
        Welcome to Fortitude! Our mission is to empower people to be happier,
        healthier, and more successful in life. We’re a family first, gym
        second. Whatever your health and fitness goals are, our experienced
        coaches and supportive members will help you get there. We promise to
        teach you, hold you accountable, and cheer you on every step of the way.
      </p>
      {!props.form && (
        <React.Fragment>
          <p style={{ fontSize: "1.5rem", display: `inline` }}>
            <strong>
              Click the button below to sign up for{" "}
              <span className="joinUs--redText">two free weeks!</span>
            </strong>
          </p>
          <button onClick={props.showForm} className="btn btn--primary">
            Sign Me Up
          </button>
        </React.Fragment>
      )}

      {!props.form && (
        <div style={{ width: `100%`, margin: `1.45rem 0`, padding: `0 1rem` }}>
          <Img
            fluid={props.fluid}
            alt="Athletes performing partner deadlifts"
          />
        </div>
      )}

      <Collapse isOpened={props.form}>
        <iframe
          src="https://trial-412A73AB.zenplanner.com/zenplanner/portal/sign-up-now.cfm?type=Membership&FRAME=true"
          style={{ width: "100%", height: "500px" }}
          frameBorder="0"
          id="idZenPlannerFrame"
        >
          <noframes>
            {" "}
            <a href="https://trial-412A73AB.zenplanner.com/zenplanner/portal/sign-up-now.cfm">
              Member Registration
            </a>
          </noframes>{" "}
        </iframe>
        <script src="https://trial-412A73AB.zenplanner.com/zenplanner/skin/js/resize.js"></script>
      </Collapse>

      <h2>Do you want to...</h2>
      <span className="joinUs__span">
        <FaCheckSquare className="joinUs__check" /> Lose weight?
      </span>
      <span className="joinUs__span">
        <FaCheckSquare className="joinUs__check" /> Feel healthier?
      </span>
      <span className="joinUs__span">
        <FaCheckSquare className="joinUs__check" /> Challenge yourself?
      </span>
      <span className="joinUs__span">
        <FaCheckSquare className="joinUs__check" /> Have fun?
      </span>
      <h2 style={{ marginTop: `1.45rem`, fontSize: `3rem` }}>COME JOIN US!</h2>
    </div>
  )
}

export default JoinUs
