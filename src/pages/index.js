import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import RestaurantMap from "../components/RestaurantMap"

import './layout.css';

const IndexPage = ({ data }) => {
  const { allRestaurantsYaml: { nodes: restaurants } } = data;
  return (
    <>
      <SEO title="Home" />
      <div className="main-container">
        <h1>Singapore Bib Gourmand map</h1>
        <p>Find the 58 Michelin awarded eateries in Singapore.</p>
        <p>Click the stars for details about the restaurants.</p>
      </div>
      <section className="map">
        <RestaurantMap
          restaurants={restaurants}
        />
      </section>
      <div className="main-container">
        <footer>
          © {new Date().getFullYear()}, Built by a hungry <a href="http://rabea.dev">Rabea</a>.
        </footer>
      </div>
    </>
  )
}

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
