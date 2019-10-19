import React, { useEffect, useRef, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Classes from "../components/classes"
import Header from "../components/header"
import JoinUs from "../components/joinUs"
import LeadContent from "../components/leadContent"
import Pricing from "../components/pricing"
import Schedule from "../components/schedule"
import SEO from "../components/seo"
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import animateScrollTo from 'animated-scroll-to'
import "../styles/main.scss"

const IndexPage = () => {

  const [form, showForm] = useState(false)

  const scrollToForm = () => {
    animateScrollTo(document.querySelector('.joinUs'))
    showForm(true)
  }

  const scrollToClasses = () => {
    animateScrollTo(document.querySelector('.classes'))
  }

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
      <Header 
        onClick={scrollToForm}
      />
      <SEO title="Home" />
      <div className="container">
        <LeadContent 
          onClick={scrollToForm}
        />
        <JoinUs 
          fluid={data.pushups.childImageSharp.fluid}
          form={form}
          showForm={() => showForm(true)}
        />
        <Schedule 
          scroll={scrollToClasses}
        />
        <Pricing />
        <Classes 
          onClick={scrollToForm}
          fluid={data.kbswings.childImageSharp.fluid}
        />

        <div className="bottomPhotos left">
          <Img fluid={data.rowing.childImageSharp.fluid} alt="Athletes exercising on rowing machines"/>
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
          <input type='button' name='reason' />
          <input type='button' name='reason' />
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
