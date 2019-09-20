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

const path = `M22 1.932v11.068h-2v-11c0-.552-.448-1-1-1s-1 .448-1 1v11h-2v-11.036c0-1.287-2-1.243-2-.033v11.069h-2v-10.99c0-1.363-2-1.313-2-.054v14.472c0 2.087 2 3.463 4 3.463v26.109c0 4 6 4 6 0v-26.108c2 0 4-1.662 4-3.227v-14.701c0-1.275-2-1.226-2-.032zm9 3.068v25h2v16c0 4 7 4 7 0v-41c0-5-9-5-9 0z`

const icon = {
  path,
  fillColor: `#FF0000`,
  fillOpacity: .6,
  //anchor: new window.google.maps.Point(0,0),
  strokeWeight: 0,
  scale: 1
}

const addRestaurants = (restaurants) => map => {
  restaurants.forEach((restaurant, index) => {
    const marker = new window.google.maps.Marker({
      map,
      icon,
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
