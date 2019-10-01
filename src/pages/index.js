import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RestaurantMap from "../components/RestaurantMap"

const IndexPage = ({ data }) => {
  const { allRestaurantsYaml: { nodes: restaurants } } = data;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="map">
        <h1>The map</h1>
        <p>Click the stars for details about the restaurants.</p>
        <RestaurantMap
          restaurants={restaurants}
        />
      </section>
    </Layout>
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
