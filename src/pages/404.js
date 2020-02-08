import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{ margin: "5rem 0", textAlign: "center" }}>NOT FOUND</h1>
    <p style={{ textAlign: "center" }}>
      Click{" "}
      <Link to="/" style={{ fontWeight: "bold" }}>
        here
      </Link>{" "}
      to return to the home page.
    </p>
  </Layout>
)

export default NotFoundPage
