import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/strive_logo.png"

const Header = ({ siteTitle }) => (
  <header id="navbar">
    <div id="navbar__logo">
      <img src={logo} alt="CrossFit Strive logo" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
