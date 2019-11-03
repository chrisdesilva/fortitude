import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'

const Reviews = props => {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GATSBY_GOOGLE_PLACES_API}&place_id=ChIJt72IgyGaRIYRXtrxZoDnDXc`)
      .then(res => res.json())
      .then(result => {
        setReviews(result.result.reviews)
        console.log(result.result.reviews)
      })
  }, [])

  return (
    <div className="reviews">
    <h2 data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out">Reviews</h2>
    <div data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out" className="reviews__bestOf">
      <div><Img fluid={props.best2018} alt="Best of Bastrop 2018 award"/></div>
      <div><Img fluid={props.best2019} alt="Best of Bastrop 2019 award"/></div>
    </div>
    <div data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out" className="reviews__cards">
      {reviews.map((review, i) => {
        let fullName = review.author_name.split(' ')
        return <div className="reviews__card">
          <p>{review.text}</p>
          <h3>-{fullName[0]}  </h3>
        </div>
      })}
    </div>
    {/*<div data-sal="fade" data-sal-duration="1000" data-sal-easing="ease-in-out" className="reviews__cards">
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffish1200%2Fposts%2F10217125698044336&width=500" width="500" height="256" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>  
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjoshua.bingaman%2Fposts%2F10217120466104389&width=500" width="500" height="161" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftimothy.sharlow.3%2Fposts%2F1186811554794133%3A0&width=500" width="500" height="354" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>   
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchelsea.l.forrest.3%2Fposts%2F10156382843612787&width=500" width="500" height="199" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarroquintorres27%2Fposts%2F10157477835996763&width=500" width="500" height="180" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>  
      <iframe className="reviews__iframe" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fveeguns1%2Fposts%2F10156052718412838%3A0&width=500" width="500" height="392" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>  
  </div>*/}
    </div>
  )
}

export default Reviews