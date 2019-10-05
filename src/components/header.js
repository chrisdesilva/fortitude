import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse } from 'react-collapse'
import logo from "../images/strive_logo.png"

const Header = ({ siteTitle }) => {

  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <>
    <header id="navbar">
      <div id="navbar-closed">
        <div id="navbar__logo">
          <Link to="/"><img src={logo} alt="CrossFit Strive logo" /></Link>
        </div>

        <div onClick={() => toggleMenu(!isMenuOpen)} id="navbar__hamburger"  className={isMenuOpen ? "animate" : null}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>

      <div id="navbar-open">
        <Collapse isOpened={isMenuOpen}>
          <div id="navbar__links">
            <Link to="/classes">Classes</Link>
            <Link to="/about">About</Link>
            <Link to="/reviews">Reviews</Link>
            <a className="btn btn-primary" href="https://crossfitstrivebastrop.wodify.com/OnlineSalesPortal/ViewSchedule.aspx?LocationId=4207&IsMobile=False&OnlineMembershipId=48149" target="_blank" rel="noreferrer noopener">Sign Me Up</a>
          </div>
        </Collapse>
      </div>

    </header>

    <header id="navbar--md">
        <div id="navbar--md__logo">
          <Link to="/"><img src={logo} alt="CrossFit Strive logo" /></Link>
        </div>

      <div id="navbar--md-open">
          <div id="navbar--md__links">
            <Link className="link" to="/classes">Classes</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/reviews">Reviews</Link>
            <a className="btn btn-primary" href="https://crossfitstrivebastrop.wodify.com/OnlineSalesPortal/ViewSchedule.aspx?LocationId=4207&IsMobile=False&OnlineMembershipId=48149" target="_blank" rel="noreferrer noopener">Sign Me Up</a>
          </div>
      </div>

    </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
