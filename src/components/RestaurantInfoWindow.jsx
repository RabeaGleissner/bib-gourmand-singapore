import React from "react"
import { Link } from "gatsby"
import "./restaurant-info-window.scss"

const RestaurantInfoWindow = ({ restaurant }) => {
  const { name, reviewSlug, opinion, address } = restaurant;
  return (
    <div className='map-info-window'>
      <h3 className='map-info-window-title'>{name}</h3>
      <p>{address}</p>
      {reviewSlug && <div className="map-info-window-review-link"><Link to={`/reviews/${reviewSlug}`}>
        <span>Read the review</span>
      </Link></div>}
      <p className="map-info-window-opinion">The Michelin Guide says: {opinion}</p>
    </div>
  )
}

export default RestaurantInfoWindow;
