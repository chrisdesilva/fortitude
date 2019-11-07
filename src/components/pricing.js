import React from 'react'

const Pricing = () => {

  return (
    <div data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out" className="pricing">
      <h2>Pricing</h2>
      <table>
        <tr>
          <th colSpan="3">12 Month Contract</th>
        </tr>
        <tr className="row">
          <td>2x/week: $90/mo</td>
          <td>3x/week: $103/mo</td>
          <td>Unlimited: $131/mo</td>
        </tr>
        <tr>
          <th colSpan="3">6 Month Contract</th>
        </tr>
        <tr className="row">
          <td>2x/week: $104/mo</td>
          <td>3x/week: $118/mo</td>
          <td>Unlimited: $151/mo</td>
        </tr>
        <tr>
          <th colSpan="3">3 Month Contract</th>
        </tr>
        <tr className="row">
          <td>2x/week: $119/mo</td>
          <td>3x/week: $136/mo</td>
          <td>Unlimited: $173/mo</td>
        </tr>
      </table>
{/*       <p>Drop-In: $20/class</p>
      <p>2x/week: $100/mo</p>
      <p>3x/week: $120/mo</p>
      <p>Unlimited: $130/mo</p>
      <p>Barbell Club: $100/mo</p>
      <p style={{margin: 0}}><strong>Family Discount</strong></p>
      <p>10% off each membership</p>
      <p style={{margin: 0}}><strong>Hero Discount</strong></p>
      <p>20% off for active military, first responders, vetarans, and teachers</p> */}
    </div>
  )
}

export default Pricing