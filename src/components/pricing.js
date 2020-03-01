import React from "react"

const Pricing = () => {
  return (
    <div
      data-sal="fade"
      data-sal-duration="500"
      data-sal-easing="ease-in-out"
      className="pricing"
    >
      <h2>Pricing</h2>
      <table>
        <tbody>
          <tr>
            <th colSpan="3">1 Year Commitment</th>
          </tr>
          <tr className="row">
            <td>2x/week: $121/mo</td>
            <td>3x/week: $156/mo</td>
            <td>Unlimited: $208/mo</td>
          </tr>
          <tr>
            <th colSpan="3">Month to Month</th>
          </tr>
          <tr className="row">
            <td>2x/week: $141/mo</td>
            <td>3x/week: $176/mo</td>
            <td>Unlimited: $228/mo</td>
          </tr>
          <tr>
            <th colSpan="3">Barbell</th>
          </tr>
          <tr className="row">
            <td colSpan="3">CrossFit add-on: $90/mo</td>
          </tr>
          <tr className="row">
            <td>3 month: $185/mo</td>
            <td>6 month: $170/mo</td>
            <td>12 month: $160/mo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Pricing
