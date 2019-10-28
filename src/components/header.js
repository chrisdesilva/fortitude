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

  const toSection = className => {
    animateScrollTo(document.querySelector(className))
    toggleMenu(false)
  }

  const signUp = () => {
    props.onClick()
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
            <span onClick={() => toSection('.schedule')}>Schedule</span> 
            <span onClick={() => toSection('.pricing')}>Pricing</span>
            <span onClick={() => toSection('.classes')}>Classes</span>
            <span onClick={() => toSection('.coaches')}>Coaches</span>
            <button onClick={signUp} className="btn btn--primary">Sign Me Up</button>
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
            <span className="link" onClick={() => toSection('.schedule')}>Schedule</span>            
            <span className="link" onClick={() => toSection('.pricing')}>Pricing</span>
            <span className="link" onClick={() => toSection('.classes')}>Classes</span>
            <span className="link" onClick={() => toSection('.coaches')}>Coaches</span>
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
