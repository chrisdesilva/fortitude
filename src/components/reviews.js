import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { FaStar } from "react-icons/fa"

const Reviews = props => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GATSBY_GOOGLE_PLACES_API}&place_id=ChIJi1OgCC20RIYRWBIO_Y9ckjg`
    )
      .then(res => res.json())
      .then(result => {
        setReviews(result.result.reviews)
      })
  }, [])

  return (
    <div className="reviews">
      <h2
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease-in-out"
      >
        Reviews
      </h2>
      <div
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease-in-out"
        className="reviews__bestOf"
      >
        {/* <div>
          <Img fluid={props.best2018} alt="Best of Bastrop 2018 award" />
        </div>
        <div>
          <Img fluid={props.best2019} alt="Best of Bastrop 2019 award" />
        </div> */}
      </div>
      <div
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-easing="ease-in-out"
        className="reviews__cards"
      >
        {reviews.map((review, i) => {
          let fullName = review.author_name.split(" ")
          return (
            <div key={review.author_name} className={`reviews__card card${i}`}>
              {reviews.map(rating => (
                <span>
                  <FaStar />
                </span>
              ))}
              <p>{review.text}</p>
              <h3>-{fullName[0]}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reviews
