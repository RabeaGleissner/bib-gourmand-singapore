import React from "react"
import { renderToString } from "react-dom/server"
import GoogleMap from "./GoogleMap"
import styles from "./googleMapStyles"
import RestaurantInfoWindow from "./RestaurantInfoWindow"
import "./map.css"

const singaporeCoords = {
  lat: 1.307078,
  lng: 103.829097,
}

const mapOptions = {
  center: singaporeCoords,
  styles,
  disableDefaultUI: true,
  gestureHandling: 'greedy',
}

const path = 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z'

const icon = {
  path,
  fillColor: '#f4796c',
  fillOpacity: 1,
  scale: .2,
  strokeColor: 'white',
  strokeWeight: 2,
}

const addRestaurants = (restaurants) => map => {
  restaurants.forEach((restaurant, index) => {
    const  infowindow = new window.google.maps.InfoWindow({
      content: renderToString(<RestaurantInfoWindow restaurant={restaurant} />),
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
