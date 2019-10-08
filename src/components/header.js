import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { Collapse } from 'react-collapse'
import logo from "../images/strive_logo.png"
import animateScrollTo from 'animated-scroll-to'

const Header = (props) => {

  const [isMenuOpen, toggleMenu] = useState(false)
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show){
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToForm = () => {
    animateScrollTo(document.querySelector('.joinUs'))
    showForm(true)
  }

  return (
    <>
    <header id="navbar" className={isMenuOpen ? "navbar__opacity" : "navbar"}>
      <div id="navbar-closed">
        <div onClick={() => toggleMenu(!isMenuOpen)} id="navbar__hamburger"  className={isMenuOpen ? "animate" : null}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div id="navbar-open">
        <Collapse isOpened={isMenuOpen}>
          <div id="navbar__links">
            <Link to="/"><img src={logo} alt="CrossFit Strive logo" /></Link>
            <Link to="/classes">Classes</Link>
            <Link to="/about">About</Link>
            <Link to="/reviews">Reviews</Link>
            <a className="btn btn--primary" href="https://crossfitstrivebastrop.wodify.com/OnlineSalesPortal/ViewSchedule.aspx?LocationId=4207&IsMobile=False&OnlineMembershipId=48149" target="_blank" rel="noreferrer noopener">Sign Me Up</a>
          </div>
        </Collapse>
      </div>

    </header>

    <header className={navBackground && "showNav"} id="navbar--md">
      
      <div id="navbar--md__logo">
        <Link to="/"><img src={logo} alt="CrossFit Strive logo" /></Link>
      </div>

      <div id="navbar--md-open">
          <div id="navbar--md__links">
            <Link className="link" to="/classes">Classes</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/reviews">Reviews</Link>
            <button onClick={props.scroll} className="btn btn--primary">Sign Me Up</button>
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
