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
import { FaEnvelope, FaFacebookSquare, FaInstagram } from "react-icons/fa"
import animateScrollTo from "animated-scroll-to"
import "../styles/main.scss"
import Reviews from "../components/reviews"

const IndexPage = () => {
  const [form, showForm] = useState(false)

  const scrollToForm = () => {
    animateScrollTo(document.querySelector(".joinUs"))
    showForm(true)
  }

  const scrollToClasses = () => {
    animateScrollTo(document.querySelector(".classes"))
  }

  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()

  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      overheadsquat: file(relativePath: { eq: "overhead_squats.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frontsquat: file(relativePath: { eq: "front_squats.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stretching: file(relativePath: { eq: "stretching.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bikelaugh: file(relativePath: { eq: "laughing_on_bike.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teamphoto: file(relativePath: { eq: "team_photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
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
      alex: file(relativePath: { eq: "coach_alex.jpg" }) {
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
      andy: file(relativePath: { eq: "coach_andy.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      corrie: file(relativePath: { eq: "coach_corrie.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elma: file(relativePath: { eq: "coach_elma.jpg" }) {
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
      juan: file(relativePath: { eq: "coach_juan.jpg" }) {
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
      <Header onClick={scrollToForm} />
      <SEO title="Home" />
      <div className="container">
        <LeadContent onClick={scrollToForm} />
        <JoinUs
          fluid={data.overheadsquat.childImageSharp.fluid}
          form={form}
          showForm={() => showForm(true)}
        />
        <Schedule scroll={scrollToClasses} />
        <Pricing />
        <Classes onClick={scrollToForm} />
        <Coaches
          athan={data.athan.childImageSharp.fluid}
          cody={data.cody.childImageSharp.fluid}
          andy={data.andy.childImageSharp.fluid}
          lexi={data.lexi.childImageSharp.fluid}
          juan={data.juan.childImageSharp.fluid}
          alex={data.alex.childImageSharp.fluid}
          corrie={data.corrie.childImageSharp.fluid}
          elma={data.elma.childImageSharp.fluid}
        />
        <Reviews />
        <div className="bottomPhotos left">
          <div
            data-sal="fade"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
          >
            <Img
              fluid={data.frontsquat.childImageSharp.fluid}
              alt="Group fitness class"
            />
          </div>
          <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease">
            <Img
              fluid={data.stretching.childImageSharp.fluid}
              alt="Athletes stretching after workout"
            />
          </div>
        </div>
        <div
          className="bottomPhotos middle"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease-in-out"
        >
          <h3>OUR VALUES</h3>
          <p>PRIORITIZE WHAT MATTERS</p>
          <p>DO THE WORK</p>
          <p>FAIL OFTEN</p>
          <p>OWN YOUR LIFE</p>
          <p>KINDNESS OVER EVERYTHING</p>
        </div>
        <div className="bottomPhotos right">
          <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease">
            <Img
              fluid={data.bikelaugh.childImageSharp.fluid}
              alt="Athletes on assault bikes smiling"
            />
          </div>
          <div
            data-sal="fade"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
          >
            <Img
              fluid={data.teamphoto.childImageSharp.fluid}
              alt="Team posing for a picture"
            />
          </div>
        </div>
        <form
          name="fortitude-contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          <input type="button" name="reason" />
          <input type="button" name="reason" />
          <input type="text" name="otherDescription" />
          <textarea name="comments" />
        </form>
        <form
          name="fortitude-hold"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="date" />
          <input type="textarea" name="reason" />
        </form>
        <form
          name="fortitude-cancel"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="comments" />
        </form>
      </div>
      <footer className="footer">
        <div className="footer__links">
          <a
            href="https://www.facebook.com/FortitudeFitness/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/fortitude_austin/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:athan@easyisevil.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="footer__contact">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.612544361549!2d-97.6734066843478!3d30.276618981798414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b42d08a0538b%3A0x38925c8ffd0e1258!2sFortitude%20Strength%20%26%20Conditioning%20-%20Easy%20is%20Evil%20CrossFit!5e0!3m2!1sen!2sus!4v1582985111356!5m2!1sen!2sus"
            maxwidth="600"
            maxheight="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
          <a href="tel:+1-512-387-4164">512-387-4164</a>
          <a
            href="https://goo.gl/maps/UoCRgdf3ESxGtkB1A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>6001 Techni Center Dr, Unit F</p>
            <p>Austin, TX 78721</p>
          </a>
          <Link className="membership" to="/membershiphold">
            Membership Hold
          </Link>
          <Link className="membership" to="/membershipcancellation">
            Membership Cancellation
          </Link>
        </div>
        © {new Date().getFullYear()} Fortitude Strength & Conditioning
        <a
          href="https://journal.crossfit.com/start.tpl?version=CFJ-white123x63"
          target="_blank"
          rel="noopener noreferrer"
          title="CrossFit Journal: The Performance-Based Lifestyle Resource"
        >
          <img
            src="https://journal.crossfit.com/templates/images/white-125x63.png"
            width="125px"
            height="63px"
            alt="CrossFit Journal: The Performance-Based Lifestyle Resource"
          />
        </a>
      </footer>
    </div>
  )
}

export default IndexPage
