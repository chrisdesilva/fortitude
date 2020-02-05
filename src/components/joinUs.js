import React, { useState } from "react"
import Img from "gatsby-image"
import { Collapse } from "react-collapse"
import { FaCheckSquare } from "react-icons/fa"

const JoinUs = props => {
  const [twoWeeks, setTwoWeeks] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false)
  const [thankYou, setThankYou] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    reason: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => {
        setThankYou(
          "Thanks for getting in touch! We'll reach out shortly to talk about how we can help you start crushing goals."
        )
      })
      .catch(error => console.log(error))
  }

  const chooseTwoweeks = e => {
    e.preventDefault()
    setTwoWeeks(true)
    setMoreInfo(false)
    setValues({ ...values, reason: "Two free weeks" })
  }

  const chooseMoreInfo = e => {
    e.preventDefault()
    setTwoWeeks(false)
    setMoreInfo(true)
    setValues({ ...values, reason: "More information" })
  }

  return (
    <div className="joinUs">
      <h1>CrossFit Strive Bastrop</h1>
      <p>
        Welcome to CrossFit Strive! Our mission is to empower people to be
        happier, healthier, and more successful in life. We’re a family first,
        CrossFit gym second. Whatever your health and fitness goals are, our
        experienced coaches and supportive members will help you get there. We
        promise to teach you, hold you accountable, and cheer you on every step
        of the way.
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
            alt="Athlete with barbell on her shoulders"
          />
        </div>
      )}

      <Collapse isOpened={props.form}>
        <form
          name="strive-contact"
          className="form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="strive-contact" />
          {!thankYou && (
            <React.Fragment>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleInputChange}
                type="text"
                name="name"
                placeholder="Your name"
                value={values.name}
              />

              <label htmlFor="email">Email</label>
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                placeholder="getfit@crushgoals.com"
                value={values.email}
              />

              <label htmlFor="phone">Phone</label>
              <input
                onChange={handleInputChange}
                type="tel"
                name="phone"
                placeholder="123-456-7898"
                value={values.phone}
              />

              <label htmlFor="comments">Questions/Comments</label>
              <input
                onChange={handleInputChange}
                type="textarea"
                name="comments"
                placeholder="Your inquiry..."
                value={values.comments}
              />

              <div className="form__buttons">
                <span>I want...</span>
                <input
                  onClick={chooseTwoweeks}
                  type="button"
                  value="Two free weeks"
                  name="reason"
                  className={
                    twoWeeks ? "btn btn--form selected" : "btn btn--form"
                  }
                />
                <input
                  onClick={chooseMoreInfo}
                  type="button"
                  value="More info"
                  name="reason"
                  className={
                    moreInfo ? "btn btn--form selected" : "btn btn--form"
                  }
                />
              </div>

              <button type="submit" className="btn btn--primary">
                Sign me up
              </button>
            </React.Fragment>
          )}
          <Collapse isOpened={thankYou}>
            <p>{thankYou}</p>
          </Collapse>
        </form>
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
