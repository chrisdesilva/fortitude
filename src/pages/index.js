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
import Coaches from "../components/coaches"
import { FaEnvelope, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import animateScrollTo from 'animated-scroll-to'
import "../styles/main.scss"
import Reviews from "../components/reviews"

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
      squat: file(relativePath: { eq: "barbell_on_back.jpg" }) {
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
      pullups: file(relativePath: { eq: "pullups.png" }) {
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
      fistBump: file(relativePath: { eq: "fist_bump.jpg" }) {
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
      postworkout: file(relativePath: { eq: "pound.jpg" }) {
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
      boxjumps: file(relativePath: { eq: "box_jumps.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      athan: file(relativePath: { eq: "coach_athan.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kady: file(relativePath: { eq: "coach_kady.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lexi: file(relativePath: { eq: "coach_lexi.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cody: file(relativePath: { eq: "coach_cody.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      best2018: file(relativePath: { eq: "2018-Best-of-Bastrop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      best2019: file(relativePath: { eq: "2019-Best-of-Bastrop.png" }) {
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
          fluid={data.squat.childImageSharp.fluid}
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
        <Coaches 
          athan={data.athan.childImageSharp.fluid}
          cody={data.cody.childImageSharp.fluid}
          kady={data.kady.childImageSharp.fluid}
          lexi={data.lexi.childImageSharp.fluid}
        />
        <Reviews 
          best2018={data.best2018.childImageSharp.fluid}
          best2019={data.best2019.childImageSharp.fluid}
        />
        <div className="bottomPhotos left">
          <div data-sal="slide-right" data-sal-duration="1000" data-sal-easing="ease-in-out"><Img fluid={data.pullups.childImageSharp.fluid} alt="Athlete performing pullups"/></div>
          <div data-sal="slide-right" data-sal-duration="1000" data-sal-easing="ease"><Img fluid={data.postworkout.childImageSharp.fluid} alt="Coach giving athlete a fist bump after workout"/></div>  
        </div>
        <div className="bottomPhotos middle">
          <Img className="middleImage" fluid={data.fullGym.childImageSharp.fluid} alt="CrossFit gym setting up full of athletes"/>
          <div data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out" className="values">
            <h3>OUR VALUES</h3>
            <p>FAIL OFTEN</p>  
            <p>DO THE WORK</p>  
            <p>OWN YOUR LIFE</p>  
            <p>PRIORITIZE WHAT MATTERS</p>  
            <p>KINDNESS OVER EVERYTHING</p>  
          </div>
        </div>
        <div className="bottomPhotos right">
          <div data-sal="slide-left" data-sal-duration="1000" data-sal-easing="ease"><Img fluid={data.boxjumps.childImageSharp.fluid} alt="Athlete jumping onto plyo box"/></div>
          <div data-sal="slide-left" data-sal-duration="1000" data-sal-easing="ease-in-out"><Img fluid={data.humble.childImageSharp.fluid} alt="Team Hubmle Hustle posing for a picture"/></div>  
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
        <form name='strive-hold' data-netlify='true' netlify-honeypot='bot-field' hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <input type='text' name='date' />
          <input type='textarea' name='reason' />
        </form>
        <form name='strive-cancel' data-netlify='true' netlify-honeypot='bot-field' hidden>
          <input type='text' name='name' />
          <input type='email' name='email' />
          <textarea name='comments' />
        </form>

      </div>
      <footer className="footer">
        <div className="footer__links">
          <a href="https://facebook.com/crossfitstrivebastrop" target="_blank" rel="noreferrer noopener"><FaFacebookSquare /></a>
          <a href="https://instagram.com/crossfitstrivebastrop" target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
          <a href="mailto:info@crossfitstrive.com" target="_blank" rel="noreferrer noopener"><FaEnvelope /></a>
        </div>
        <div className="footer__contact">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13805.434488145698!2d-97.346715!3d30.11255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x770de78066f1da5e!2sCrossFit%20Strive%20Bastrop!5e0!3m2!1sen!2sus!4v1575587420411!5m2!1sen!2sus" maxwidth="600" maxheight="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>  
          <a href="tel:+1-512-555-9876">512-555-9876</a>
          <a href="https://goo.gl/maps/B362Ye6MUBcPYLvy8" target="_blank" rel="noreferrer noopener"><p>623 Highway 71 West, Suite 108</p><p>Bastrop, TX 78602</p></a>
          <Link className="membership" to="/membershiphold">Membership Hold</Link>
          <Link className="membership" to="/membershipcancellation">Membership Cancellation</Link>
        </div>
        © {new Date().getFullYear()} CrossFit Strive Bastrop
      </footer>
    </div>
  )
}

export default IndexPage
