import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { FaStar } from "react-icons/fa"

const Reviews = props => {
  // const [reviews, setReviews] = useState([])

  // useEffect(() => {
  //   fetch(
  //     `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GATSBY_GOOGLE_PLACES_API}&place_id=ChIJi1OgCC20RIYRWBIO_Y9ckjg`
  //   )
  //     .then(res => res.json())
  //     .then(result => {
  //       setReviews(result.result.reviews)
  //     })
  // }, [])

  const reviews = [
    {
      author_name: "Elena Warren",
      rating: 5,
      text:
        "I dropped in to Fortitude to get my programming done while on vacation. I’ve dropped into many CrossFit gyms in my life and this was easily one of the best. The facility, coaches, and programming were top notch. If you’re nearby, train here. You won’t regret it!",
    },
    {
      author_name: "Justin Reed",
      rating: 5,
      text:
        "After trying out three different boxes in Austin, not one of them compares to the community, coaching, or people of Fortitude. Do yourself a favor and skip the other guys and come find your home with us!",
    },
    {
      author_name: "Nave Nosio",
      rating: 5,
      text:
        "I dropped in while on vacation from Milwaukee and everyone was extremely friendly and welcoming. I highly recommend them solely based on a one hour class. Will drop back in when back in town!",
    },
    {
      author_name: "Katie Joiner",
      rating: 5,
      text:
        "A stellar gym with the best coaching and community in Austin! I've been coming to this box for 3+ years now and have yet to find a place like it.",
    },
    {
      author_name: "Jason St Pierre",
      rating: 5,
      text: "The most welcoming environment that I have ever walked into.",
    },
  ]

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
