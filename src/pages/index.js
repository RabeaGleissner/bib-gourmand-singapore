import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MapContainer from "../components/MapContainer"
import "./index.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The map</h1>
    <MapContainer
      onMount={addRestaurants(restaurants)}
      newMapOptions={newMapOptions}
    />
  </Layout>
)

const addRestaurants = (restaurants) => map => {
  restaurants.forEach((restaurant, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: restaurant.coords,
      label: `${index + 1}`,
      title: restaurant.name,
    })
    marker.addListener('click', () => {
      console.log('clicked on marker')
    })
  })
}

const restaurants = [
  {
    coords: {
      lat: 1.312708,
      lng: 103.857289,
    },
    name: 'Restaurant name',
  }
]

const newMapOptions = {
  center: {
    lat: 1.312708,
    lng: 103.857289,
  },
  zoom: 15,
};

export default IndexPage
