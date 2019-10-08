import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { FaEnvelope, FaFacebookSquare, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }, props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} scroll={props.scroll}/>
      <div>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer__links">
            <a href="https://facebook.com/crossfitstrivebastrop" target="_blank" rel="noreferrer noopener"><FaFacebookSquare /></a>
            <a href="https://instagram.com/crossfitstrivebastrop" target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
            <a href="mailto:info@crossfitstrive.com" target="_blank" rel="noreferrer noopener"><FaEnvelope /></a>
            <a href="tel:+1-512-555-9876"><FaPhone /></a>
            <a href="https://goo.gl/maps/B362Ye6MUBcPYLvy8" target="_blank" rel="noreferrer noopener"><FaMapMarkerAlt /></a>
          </div>
          © {new Date().getFullYear()} CrossFit Strive Bastrop
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
