import React, { useEffect, useRef, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Collapse } from 'react-collapse'

import SEO from "../components/seo"

import { FaEnvelope, FaFacebookSquare, FaInstagram, FaMapMarkerAlt, FaPhone, FaCheckSquare, FaDumbbell, FaFire, FaHeartbeat } from 'react-icons/fa'
import animateScrollTo from 'animated-scroll-to'
import logo from "../images/strive_logo.png"
import "../styles/main.scss"

const IndexPage = () => {

  const [isCrossfitOpen, toggleCrossfit] = useState(false)
  const [isPumpBurnOpen, togglePumpBurn] = useState(false)
  const [isBarbellOpen, toggleBarbell] = useState(false)
  const [form, showForm] = useState(false)
  const [twoWeeks, setTwoWeeks] = useState(false)
  const [moreInfo, setMoreInfo] = useState(false)
  const [thankYou, setThankYou] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    reason: ''
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    }).then(() => {
      setThankYou('Thanks for getting in touch! We\'ll reach out shortly to talk about how we can help you start crushing goals.')
    })
    .catch(error => console.log(error))
  }

  const chooseTwoweeks = e => {
    e.preventDefault()
    setTwoWeeks(true)
    setMoreInfo(false)
    setValues({...values, reason: 'Two free weeks'})
  }

  const chooseMoreInfo = e => {
    e.preventDefault()
    setTwoWeeks(false)
    setMoreInfo(true)
    setValues({...values, reason: 'More information'})
  }

  const scrollToForm = () => {
    animateScrollTo(document.querySelector('.joinUs'))
    showForm(true)
  }

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

  const data = useStaticQuery(graphql`
    query {
      pushups: file(relativePath: { eq: "pushups_bumpers.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kids: file(relativePath: { eq: "kids_exercising.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rowing: file(relativePath: { eq: "rowing.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fullGym: file(relativePath: { eq: "full_gym.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laughing: file(relativePath: { eq: "laughing_on_rower.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pushpress: file(relativePath: { eq: "push_press.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kbswings: file(relativePath: { eq: "single_arm_swings.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      humble: file(relativePath: { eq: "humble_hustle.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rolling: file(relativePath: { eq: "rolling_out.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>

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

      <header className={navBackground ? "showNav" : undefined} id="navbar--md">
        
        <div id="navbar--md__logo">
          <Link to="/"><img src={logo} alt="CrossFit Strive logo" /></Link>
        </div>

        <div id="navbar--md-open">
            <div id="navbar--md__links">
              <Link className="link" to="/classes">Classes</Link>
              <Link className="link" to="/about">About</Link>
              <Link className="link" to="/reviews">Reviews</Link>
              <button onClick={scrollToForm} className="btn btn--primary">Sign Me Up</button>
            </div>
        </div>

      </header>
      <SEO title="Home" />
      <div className="container">
        
        <div className="leadContent">
          <h1>
            <span className="leadContent__span">You’ll sweat. </span> 
            <span className="leadContent__span">You’ll laugh. </span> 
            <span className="leadContent__span">You’ll get stronger. </span> 
            <span className="leadContent__span">We promise.</span> 
          </h1>
          <button onClick={scrollToForm} className="btn btn--hero">Sign Me Up</button>
        </div>

        <div className="joinUs">
        <h1>CrossFit Strive Bastrop</h1>
          <p>
            Welcome to CrossFit Strive! Our mission is to empower people to be happier, healthier, and more successful in life. We’re a family first, CrossFit gym second. Whatever your health and fitness goals are, our experienced coaches and supportive members will help you get there.   We promise to teach you, hold you accountable, and cheer you on every step of the way. 
          </p>
          {!form && 
            <React.Fragment>
              <p style={{fontSize: '1.5rem', display: `inline`}}>
                <strong>Click the button below to sign up for <span className="joinUs--redText">two free weeks!</span></strong>
              </p>
              <button onClick={() => showForm(true)} className="btn btn--primary">Sign Me Up</button>
            </React.Fragment>
          }

          {!form && <div style={{width: `100%`, margin: `1.45rem 0`, padding: `0 1rem`}}><Img fluid={data.pushups.childImageSharp.fluid} /></div>}

          <Collapse isOpened={form}>
            <form name="strive-contact" className="form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="strive-contact" />
              {!thankYou &&
                <React.Fragment>
                  <label htmlFor="name">Name</label>
                  <input onChange={handleInputChange} type="text" name="name" placeholder="Your name" value={values.name}/>

                  <label htmlFor="email">Email</label>
                  <input onChange={handleInputChange} type='email' name='email' placeholder="getfit@crushgoals.com" value={values.email}/>

                  <label htmlFor="phone">Phone</label>
                  <input onChange={handleInputChange} type='tel' name='phone' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="123-456-7898" value={values.phone}/>

                  <label htmlFor="comments">Questions/Comments</label>
                  <input onChange={handleInputChange} type="textarea" name="comments" placeholder="Your inquiry..." value={values.comments}/>

                  <div className="form__buttons">
                    <span>I want...</span>
                    <button onClick={chooseTwoweeks} name="free" className={twoWeeks ? "btn btn--form selected" : "btn btn--form"}>Two Free Weeks</button>
                    <button onClick={chooseMoreInfo} name="info" className={moreInfo ? "btn btn--form selected" : "btn btn--form"}>More Information</button>
                  </div>

                  <button type="submit" className="btn btn--primary">Sign me up</button>
                </React.Fragment>
              }
              <Collapse isOpened={thankYou}><p>{thankYou}</p></Collapse>
            </form>
          </Collapse>

          <h2>Do you want to...</h2>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> lose weight?</span>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> feel healthier?</span>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> challenge yourself?</span>
              <span className="joinUs__span"><FaCheckSquare className="joinUs__check" /> have fun?</span>
          <h2 style={{marginTop: `1.45rem`, fontSize: `3rem`}}>COME JOIN US!</h2>
        </div>

        <div className="schedule">
          <h2>Schedule</h2>
          <p>Click a class below to check the schedule</p>
          <span onClick={() => toggleCrossfit(!isCrossfitOpen)} className={isCrossfitOpen ? "strive-red" : undefined}><FaHeartbeat/><p>CrossFit</p></span>
            <Collapse isOpened={isCrossfitOpen}>
              <table className="schedule--crossfit__table">
                <tbody>
                  <tr>
                    <th>Monday-Friday</th>
                  </tr>
                  <tr>
                    <td>5:30am | 6:45am | 12:00pm | 4:30pm | 5:45pm | 7:00pm</td>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                  </tr>
                  <tr>
                    <td>8:00am | 9:45am | 10:30am</td>
                  </tr>
                  <tr>
                    <th>Sunday</th>
                  </tr>
                  <tr>
                    <td>9:00am</td>
                  </tr>
                </tbody>
              </table>
            </Collapse>
          <span onClick={() => togglePumpBurn(!isPumpBurnOpen)} className={isPumpBurnOpen ? "strive-red" : undefined}><FaFire /><p>Pump 30/Burn 30</p></span>
            <Collapse isOpened={isPumpBurnOpen}>
              <table className="schedule--crossfit__table">
                <tbody>
                  <tr>
                    <th>Monday-Wednesday-Friday</th>
                  </tr>
                  <tr>
                    <td>9:30am Pump / 10:00am Burn</td>
                  </tr>
                  <tr>
                    <td>5:45pm Pump / 6:15pm Burn</td>
                  </tr>
                  <tr>
                    <th>Tuesday-Thursday</th>
                  </tr>
                  <tr>
                    <td>5:30am Pump / 6:00am Burn</td>
                  </tr>
                  <tr>
                    <td>9:30am Pump / 10:00am Burn</td>
                  </tr>
                </tbody>
              </table>
            </Collapse>
          <span onClick={() => toggleBarbell(!isBarbellOpen)} className={isBarbellOpen ? "strive-red" : undefined}><FaDumbbell /><p> Barbell Club</p></span>
            <Collapse isOpened={isBarbellOpen}>
              <table className="schedule--crossfit__table">
                <tbody>
                  <tr>
                    <th>Tuesday</th>
                  </tr>
                  <tr>
                    <td>4:30pm | 5:45pm</td>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                  </tr>
                  <tr>
                    <td>4:30pm | 5:45pm</td>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                  </tr>
                  <tr>
                    <td>8:00am</td>
                  </tr>
                </tbody>
              </table>
            </Collapse>  
        </div>

    
        <div className="pricing">
          <h2>Pricing</h2>
          <p>Drop-In: $20/class</p>
          <p>2x/week: $100/mo</p>
          <p>3x/week: $120/mo</p>
          <p>Unlimited: $130/mo</p>
          <p>Barbell Club: $100/mo</p>
          <p style={{margin: 0}}><strong>Family Discount</strong></p>
          <p>10% off each membership</p>
          <p style={{margin: 0}}><strong>Hero Discount</strong></p>
          <p>20% off for active military, first responders, vetarans, and teachers</p>
        </div>

        <div className="bottomPhotos left">
          <Img fluid={data.rowing.childImageSharp.fluid} alt="Athletes exercising on rowing machines"/>
          <Img fluid={data.kbswings.childImageSharp.fluid} alt="Athletes performing single arm kettlebell swings"/>
        </div>
        <div className="bottomPhotos middle">
          <Img fluid={data.fullGym.childImageSharp.fluid} alt="CrossFit gym setting up full of athletes"/>
        </div>
        <div className="bottomPhotos right">
          <Img fluid={data.humble.childImageSharp.fluid} alt="Team Hubmle Hustle posing for a picture"/>
          <Img fluid={data.rolling.childImageSharp.fluid} alt="Athletes using foam rollers"/>  
          <Img fluid={data.pushpress.childImageSharp.fluid} alt="Woman lifting a barbell overhead"/>  
        </div>
        <form name='strive-contact' data-netlify='true' netlify-honeypot='bot-field' hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <input type='tel' name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          <input type='button' name='free' />
          <input type='button' name='info' />
          <input type='text' name='otherDescription' />
          <textarea name='comments' />
        </form>

      </div>
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
  )
}

export default IndexPage
