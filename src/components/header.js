import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { Collapse } from 'react-collapse'
import logo from "../images/strive_logo.png"
import animateScrollTo from 'animated-scroll-to'

const Header = props => {

  const [isMenuOpen, toggleMenu] = useState(false)
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()

  const toClasses = () => {
    animateScrollTo(document.querySelector('.classes'))
    toggleMenu(false)
  }

  const toPricing = () => {
    animateScrollTo(document.querySelector('.pricing'))
    toggleMenu(false)
  }

  const toSchedule = () => {
    animateScrollTo(document.querySelector('.schedule'))
    toggleMenu(false)
  }

  const toCoaches = () => {
    animateScrollTo(document.querySelector('.coaches'))
    toggleMenu(false)
  }
  
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
            <span onClick={toSchedule}>Schedule</span> 
            <span onClick={toPricing}>Pricing</span>
            <span onClick={toClasses}>Classes</span>
            <span onClick={toCoaches}>Coaches</span>
            <button onClick={props.onClick} className="btn btn--primary">Sign Me Up</button>
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
            <span className="link" onClick={toSchedule}>Schedule</span>            
            <span className="link" onClick={toPricing}>Pricing</span>
            <span className="link" onClick={toClasses}>Classes</span>
            <span className="link" onClick={toCoaches}>Coaches</span>
            <button onClick={props.onClick} className="btn btn--primary">Sign Me Up</button>
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
