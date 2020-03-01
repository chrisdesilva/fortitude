import React, { useState } from "react"
import { Collapse } from "react-collapse"
import { Link } from "gatsby"

const MembershipHold = () => {
  const [thankYou, setThankYou] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
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
          "Your account will be put on hold for 30 days. Upon expiration of the hold, your account will automatically reactivate and payments will resume."
        )
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="joinUs">
      <h1>Membership Hold Request</h1>
      <p>
        This is not a termination request. As stated in your membership
        agreement, you have the option to put your automatically recurring
        monthly membership on hold for any reason. Membership hold requests must
        be submitted no less than five (5) business days before your forthcoming
        scheduled renewal date. Membership hold requests received later cannot
        be processed until after the forthcoming scheduled renewal payment. All
        membership payments are non-refundable. Membership hold requests are
        available in 30-day increments. Upon expiration of the hold period that
        you select below, your account will automatically reactivate and regular
        membership payments will resume. If you chose to cancel your membership
        during the hold period, the standard 30-day written cancellation notice
        requirement stated in your membership agreement is applicable. If you
        choose to reactivate your membership after it is canceled, membership
        rates in effect at the time of reactivation will be applicable
        (membership rates are subject to change). By submitting this form I
        acknowledge that I have read and understand the terms of the membership
        hold.
      </p>
      <form
        name="fortitude-hold"
        className="form hold"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="fortitude-hold" />
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

            <label htmlFor="date">Membership Hold Start Date</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="date"
              placeholder="MM/DD/YYYY"
              value={values.date}
            />

            <label htmlFor="reason">Reason for Membership Hold</label>
            <textarea
              onChange={handleInputChange}
              type="textarea"
              name="reason"
              placeholder="Reason for Membership Hold"
              value={values.reason}
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

export default MembershipHold
