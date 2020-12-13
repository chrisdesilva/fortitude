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
            <th colSpan="3">Unlimited</th>
          </tr>
          <tr className="row">
            <td></td>
            <td>$195/mo</td>
            <td></td>
          </tr>
          <tr>
            <th colSpan="3">Punch Cards</th>
          </tr>
          <tr className="row">
            <td>10 classes: $200</td>
            <td></td>
            <td>20 classes: $320</td>
          </tr>
          <tr>
            <th colSpan="3">Barbell</th>
          </tr>
          <tr className="row">
            <td colSpan="3">Membership add-on: $90/mo</td>
          </tr>
          <tr className="row">
            <td colSpan="3">Unlimited: $160/mo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Pricing
