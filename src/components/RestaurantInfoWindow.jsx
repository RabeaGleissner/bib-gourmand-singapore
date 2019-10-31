import React from "react"
import "./restaurant-info-window.scss"

const RestaurantInfoWindow = ({ restaurant }) => {
  console.log('restaurant', restaurant);
  return (
    <div className='map-info-window'>
      <h3 className='map-info-window-title'>{restaurant.name}</h3>
      <p>{restaurant.address}</p>
      <p className="map-info-window-opinion">The Michelin Guide says: {restaurant.opinion}</p>
    </div>
  )
}

export default RestaurantInfoWindow;
