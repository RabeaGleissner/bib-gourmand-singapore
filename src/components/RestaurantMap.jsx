import React from "react"
import GoogleMap from "./GoogleMap"
import styles from "./googleMapStyles"
import "./map.css"

const singaporeCoords = {
  lat: 1.3521,
  lng: 103.8198,
}

const mapOptions = {
  center: singaporeCoords,
  styles,
}

const addRestaurants = (restaurants) => map => {
  restaurants.forEach((restaurant, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: restaurant.coords,
      label: restaurant.name,
      title: restaurant.name,
    })
    marker.addListener('click', () => {
      console.log('clicked on marker')
    })
  })
}

const RestaurantMap = ({ restaurants }) => {
  return (
    <GoogleMap
      onMount={addRestaurants(restaurants)}
      mapOptions={mapOptions}
    />
  )
}

export default RestaurantMap
