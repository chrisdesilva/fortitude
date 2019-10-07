import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Collapse } from 'react-collapse'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaCheckSquare, FaDumbbell, FaFire, FaHeartbeat } from 'react-icons/fa'

const IndexPage = () => {

  const [isCrossfitOpen, toggleCrossfit] = useState(false)
  const [isPumpBurnOpen, togglePumpBurn] = useState(false)
  const [isBarbellOpen, toggleBarbell] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      pushups: file(relativePath: { eq: "pushups_bumpers.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kids: file(relativePath: { eq: "kids_exercising.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rowing: file(relativePath: { eq: "rowing.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fullGym: file(relativePath: { eq: "full_gym.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laughing: file(relativePath: { eq: "laughing_on_rower.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pushpress: file(relativePath: { eq: "push_press.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kbswings: file(relativePath: { eq: "single_arm_swings.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        
        <div className="leadContent">
          <h1>
            <span className="leadContent__span">You’ll sweat. </span> 
            <span className="leadContent__span">You’ll laugh. </span> 
            <span className="leadContent__span">You’ll get stronger. </span> 
            <span className="leadContent__span">We promise.</span> 
          </h1>
          <a className="btn btn-primary" href="https://crossfitstrivebastrop.wodify.com/OnlineSalesPortal/ViewSchedule.aspx?LocationId=4207&IsMobile=False&OnlineMembershipId=48149" target="_blank" rel="noreferrer noopener">Sign Me Up</a>
        </div>

        <div className="joinUs">
        <h1>CrossFit Strive Bastrop</h1>
          <p>
            Welcome to CrossFit Strive! Our mission is to empower people to be happier, healthier, and more successful in life. We’re a family first, CrossFit gym second. Whatever your health and fitness goals are, our experienced coaches and supportive members will help you get there.   We promise to teach you, hold you accountable, and cheer you on every step of the way. 
          </p>
          <p style={{fontSize: '1.5rem', display: `inline`}}>
            <strong>Click the button below to sign up for <span className="joinUs--redText">two free weeks!</span></strong>
          </p>
          <a className="btn btn--primary" href="https://crossfitstrivebastrop.wodify.com/OnlineSalesPortal/ViewSchedule.aspx?LocationId=4207&IsMobile=False&OnlineMembershipId=48149" target="_blank" rel="noreferrer noopener">Sign Me Up</a>

          <div style={{width: `100%`, margin: `1.45rem 0`, padding: `0 1rem`}}><Img fluid={data.pushups.childImageSharp.fluid} /></div>
          <h2>Do you want to...</h2>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> lose weight?</span>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> feel healthier?</span>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> challenge yourself?</span>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> have fun?</span>
          <h2 style={{marginTop: `1.45rem`, fontSize: `3rem`}}>COME JOIN US!</h2>
        </div>

        <div className="schedule">
          <h2>Schedule</h2>
          <p>Click a class below to check the schedule</p>
          <span onClick={() => toggleCrossfit(!isCrossfitOpen)} className="schedule--crossfit"><FaHeartbeat /><p>CrossFit</p></span>
            <Collapse isOpened={isCrossfitOpen}>
              <table className="schedule--crossfit__table">
                <tbody>
                  <tr>
                    <th>Monday-Friday</th>
                  </tr>
                  <tr>
                    <td>5:30am | 6:45am | 12:00pm | 4:30pm | 5:45pm | 7:00pm</td>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                  </tr>
                  <tr>
                    <td>8:00am | 9:45am | 10:30am</td>
                  </tr>
                  <tr>
                    <th>Sunday</th>
                  </tr>
                  <tr>
                    <td>9:00am</td>
                  </tr>
                </tbody>
              </table>
            </Collapse>
          <span onClick={() => togglePumpBurn(!isPumpBurnOpen)} className="schedule--pumpburn"><FaFire /><p>Pump 30/Burn 30</p></span>
            <Collapse isOpened={isPumpBurnOpen}>
              <table className="schedule--crossfit__table">
                <tbody>
                  <tr>
                    <th>Monday-Wednesday-Friday</th>
                  </tr>
                  <tr>
                    <td>9:30am Pump / 10:00am Burn</td>
                  </tr>
                  <tr>
                    <td>5:45pm Pump / 6:15pm Burn</td>
                  </tr>
                  <tr>
                    <th>Tuesday-Thursday</th>
                  </tr>
                  <tr>
                    <td>5:30am Pump / 6:00am Burn</td>
                  </tr>
                  <tr>
                    <td>9:30am Pump / 10:00am Burn</td>
                  </tr>
                </tbody>
              </table>
            </Collapse>
          <span onClick={() => toggleBarbell(!isBarbellOpen)} className="schedule--barbell"><FaDumbbell /><p> Barbell Club</p></span>
            <Collapse isOpened={isBarbellOpen}>
              <table className="schedule--crossfit__table">
                <tbody>
                  <tr>
                    <th>Tuesday</th>
                  </tr>
                  <tr>
                    <td>4:30pm | 5:45pm</td>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                  </tr>
                  <tr>
                    <td>4:30pm | 5:45pm</td>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                  </tr>
                  <tr>
                    <td>8:00am</td>
                  </tr>
                </tbody>
              </table>
            </Collapse>  
        </div>

    
        <div className="pricing">
          <h2>Pricing</h2>
          <p>Drop-In: $20/class</p>
          <p>2x/week: $100/mo</p>
          <p>3x/week: $120/mo</p>
          <p>Unlimited: $130/mo</p>
          <p>Barbell Club: $100/mo</p>
          <p style={{margin: 0}}><strong>Family Discount</strong></p>
          <p>10% off each membership</p>
          <p style={{margin: 0}}><strong>Hero Discount</strong></p>
          <p>20% off for active military, first responders, vetarans, and teachers</p>
        </div>

        <div className="bottomPhotos left">
          <Img fluid={data.rowing.childImageSharp.fluid} alt="Athletes exercising on rowing machines"/>
          <Img fluid={data.kbswings.childImageSharp.fluid} alt="Athletes performing single arm kettlebell swings"/>
        </div>
        <div className="bottomPhotos middle">
          <Img fluid={data.fullGym.childImageSharp.fluid} alt="CrossFit gym setting up full of athletes"/>
        </div>
        <div className="bottomPhotos right">
          <Img fluid={data.kids.childImageSharp.fluid} alt="Kids exercising in fitness class"/>
          <Img fluid={data.laughing.childImageSharp.fluid} alt="Women laughing on rowing machines"/>  
          <Img fluid={data.pushpress.childImageSharp.fluid} alt="Woman lifting a barbell overhead"/>  
        </div>

      </div>
    </Layout>
  )
}

export default IndexPage
