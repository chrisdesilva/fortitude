import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FaEnvelope, FaFacebookSquare, FaInstagram } from "react-icons/fa"

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
      <Header siteTitle={data.site.siteMetadata.title} scroll={props.scroll} />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer__links">
            <a
              href="https://facebook.com/crossfitstrivebastrop"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://instagram.com/crossfitstrivebastrop"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:info@crossfitstrive.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaEnvelope />
            </a>
          </div>
          <div className="footer__contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13805.434488145698!2d-97.346715!3d30.11255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x770de78066f1da5e!2sCrossFit%20Strive%20Bastrop!5e0!3m2!1sen!2sus!4v1575587420411!5m2!1sen!2sus"
              maxWidth="600"
              maxHeight="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
            ></iframe>
            <a href="tel:+1-512-555-9876">512-555-9876</a>
            <a
              href="https://goo.gl/maps/B362Ye6MUBcPYLvy8"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>623 Highway 71 West, Suite 108</p>
              <p>Bastrop, TX 78602</p>
            </a>
            <Link className="membership" to="/membershiphold">
              Membership Hold
            </Link>
            <Link className="membership" to="/membershipcancellation">
              Membership Cancellation
            </Link>
            <a
              href="https://journal.crossfit.com/start.tpl?version=CFJ-white123x63"
              target="_blank"
              title="CrossFit Journal: The Performance-Based Lifestyle Resource"
            >
              <img
                src="https://journal.crossfit.com/templates/images/white-125x63.png"
                width="125px"
                height="63px"
                alt="CrossFit Journal: The Performance-Based Lifestyle Resource"
              />
            </a>
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
