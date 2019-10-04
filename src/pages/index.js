import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div id="leadContent">
      <h1>
        You’ll sweat, you’ll laugh, and you’ll get stronger.  We promise. 
      </h1>
        <p>
          Welcome to CrossFit Strive! Our mission is to empower people to be happier, healthier, and more successful in life. We’re a family first, CrossFit gym second. Whatever your health and fitness goals are, our experienced coaches and supportive members will help you get there.   We promise to teach you, hold you accountable, and cheer you on every step of the way. 
        </p>
        <button className="btn btn-primary">Sign Me Up!</button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
