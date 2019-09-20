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

const path = `M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z`

const icon = {
  path,
  fillColor: `deeppink`,
  fillOpacity: .7,
  strokeWeight: 0,
  scale: .8,
  rotation: 0,
}

const addRestaurants = (restaurants) => map => {
  restaurants.forEach((restaurant, index) => {
    const  infowindow = new window.google.maps.InfoWindow({
      content: `<div class='map-info-window'><h3 class='map-info-window-title'>${restaurant.name}</h3></div>`,
    });
    const marker = new window.google.maps.Marker({
      map,
      icon,
      position: restaurant.coords,
      draggable: false,
    })
    marker.addListener('click', () => {
      infowindow.open(map, marker);
      window.google.maps.event.addListener(map, 'click', () => {
        infowindow.close();
      });
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
