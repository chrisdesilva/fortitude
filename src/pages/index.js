import React from "react"
import TextLoop from "react-text-loop"
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
        You’ll sweat. you’ll laugh. you’ll get stronger.  We promise. 
      </h1>
        <button className="btn btn-primary">Sign Me Up!</button>
      </div>
      <div className="joinUs">
        <h2>
        Want to {" "}
          <TextLoop
            springConfig={{stiffness: 50, damping: 20}}
          >
            <span>lose weight?</span>
            <span>feel healthier?</span>
            <span>challenge yourself?</span>
            <span>have fun?</span>
          </TextLoop>
        </h2>
        <p>
          Welcome to CrossFit Strive! Our mission is to empower people to be happier, healthier, and more successful in life. We’re a family first, CrossFit gym second. Whatever your health and fitness goals are, our experienced coaches and supportive members will help you get there.   We promise to teach you, hold you accountable, and cheer you on every step of the way. 
        </p>

      </div>
    </div>
  </Layout>
)

export default IndexPage
