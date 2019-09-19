import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MapContainer from "../components/MapContainer"


const IndexPage = ({ data }) => {
  console.log('data', data);
  const { allRestaurantsYaml: { nodes: restaurants } } = data;
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
  return (
    <Layout>
      <SEO title="Home" />
      <section className="map">
        <h1>The map</h1>
        <MapContainer
          onMount={addRestaurants(restaurants)}
          newMapOptions={newMapOptions}
        />
      </section>
    </Layout>
  )
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

export const query = graphql`
   query {
     allRestaurantsYaml {
       nodes {
           name
           cuisine
           address
           coords {
             lat
             lng
           }
       }
     }
   }
 `

export default IndexPage
