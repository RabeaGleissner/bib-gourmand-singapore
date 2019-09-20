import React from "react"
import GoogleMap from "./GoogleMap"
import styles from "./googleMapStyles"
import "./map.css"

const newMapOptions = {
  center: {
    lat: 1.312708,
    lng: 103.857289,
  },
  zoom: 13,
  styles,
};

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
      newMapOptions={newMapOptions}
    />
  )
}

export default RestaurantMap
