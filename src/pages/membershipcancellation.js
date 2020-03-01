import React, { useState } from "react"
import { Collapse } from "react-collapse"
import { Link } from "gatsby"

const MembershipCancellation = () => {
  const [thankYou, setThankYou] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    reason: "",
    coaching: "",
    facilities: "",
    rating: "",
    recommend: "",
    comments: "",
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
          "We're sorry to see you go. Please reach back out if you decide to reactive your membership. We'd love to have you back!"
        )
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="joinUs">
      <h1>Membership Cancellation</h1>
      <p>
        If you decide to reactivate your membership in the future (and we hope
        you do) membership rates in effect at the time of reactivation will be
        applicable as membership rates are subject to change. If you would like
        to put your membership on hold instead of canceling, you can submit a
        Membership Hold Request. If you’re sure you’d like to cancel, just
        complete and submit the form below. This will serve as your 30-day
        written cancellation notice as required by your membership agreement.
        Your membership will be cancelled 30 days from the submission of the
        form below. Note that if you have a scheduled payment within this
        period, the payment will be processed as scheduled. All payments are
        non-refundable. Termination of your membership before your scheduled
        date comes with an early termination fee as outlined in your contract.
        You will be required to pay the difference between the membership you
        were on and the membership you should have been on.
      </p>
      <form
        name="fortitude-cancel"
        className="form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="fortitude-cancel" />
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
              placeholder="Your email address"
              value={values.email}
            />

            <label htmlFor="reason">
              Please select the option below that best describes your reason for
              leaving.
            </label>
            <select name="reason" onChange={handleInputChange}>
              <option value="">Please select one</option>
              <option value="too expensive">Too expensive</option>
              <option value="location">Location</option>
              <option value="difficulty">Difficulty</option>
              <option value="injury">Injury</option>
              <option value="attendance">Lack of attendance</option>
              <option value="child">Having a child</option>
            </select>

            <label htmlFor="coaching">
              How well did the Coaching Staff attend to your fitness goals and
              needs?
            </label>
            <select name="coaching" onChange={handleInputChange}>
              <option value="">Please select one</option>
              <option value="Extremely Well">Extremely Well</option>
              <option value="Very Well">Very Well</option>
              <option value="Moderately Well">Moderately Well</option>
              <option value="Slightly Well">Slightly Well</option>
              <option value="Not Well At All">Not Well At All</option>
            </select>

            <label htmlFor="facilities">
              How would you describe your satisfaction with the facilties
              including equipment, parking, and accessibility?
            </label>
            <select name="facilities" onChange={handleInputChange}>
              <option value="">Please select one</option>
              <option value="Extremely Satisfied">Extremely Satisfied</option>
              <option value="Very Satisfied">Very Satisfied</option>
              <option value="Moderately Satisfied">Moderately Satisfied</option>
              <option value="Slightly Satisfied">Slightly Satisfied</option>
              <option value="Not Satisfied At All">Not Satisfied At All</option>
            </select>

            <label htmlFor="rating">
              Overall, how would you rate your Fortitude experience?
            </label>
            <select name="rating" onChange={handleInputChange}>
              <option value="">Please select one</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>

            <label htmlFor="recommend">
              How likely are you to recommend Fortitude to other athletes?
            </label>
            <select name="recommend" onChange={handleInputChange}>
              <option value="">Please select one</option>
              <option value="10">10</option>
              <option value="9">9</option>
              <option value="8">8</option>
              <option value="7">7</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>

            <label htmlFor="comments">Additional Comments/Questions</label>
            <textarea
              onChange={handleInputChange}
              type="textarea"
              name="comments"
              placeholder="Additional Comments/Questions"
              value={values.comments}
            />

            <button type="submit" className="btn btn--primary">
              submit
            </button>
          </React.Fragment>
        )}
        <Collapse isOpened={thankYou}>
          <p>{thankYou}</p>
        </Collapse>
      </form>
      <Link to="/">Return to Homepage</Link>
    </div>
  )
}

export default MembershipCancellation
