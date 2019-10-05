import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pushups_bumpers.jpg" }) {
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
        
        <div id="leadContent">
          <h1>
            You’ll sweat. you’ll laugh. you’ll get stronger.  We promise. 
          </h1>
          <a className="btn btn-primary" href="https://crossfitstrivebastrop.wodify.com/OnlineSalesPortal/ViewSchedule.aspx?LocationId=4207&IsMobile=False&OnlineMembershipId=48149" target="_blank" rel="noreferrer noopener">Sign Me Up</a>
        </div>

        <div className="schedule">
          <h2>Classes</h2>
          <p>CrossFit</p>
          <p>Pump 30/Burn 30</p>
          <p>Barbell Club</p>
        </div>

        <div className="joinUs">
          <h2>
          Want to lose weight?
              <span> feel healthier?</span>
              <span> challenge yourself?</span>
              <span> have fun?</span>
          </h2>
          <div style={{width: `100%`, marginBottom: `1.45rem`, padding: `0 1rem`}}><Img fluid={data.file.childImageSharp.fluid} /></div>
          <p>
            Welcome to CrossFit Strive! Our mission is to empower people to be happier, healthier, and more successful in life. We’re a family first, CrossFit gym second. Whatever your health and fitness goals are, our experienced coaches and supportive members will help you get there.   We promise to teach you, hold you accountable, and cheer you on every step of the way. 
          </p>
        </div>

        <div className="contact">
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
