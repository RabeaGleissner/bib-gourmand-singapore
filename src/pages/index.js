import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import RestaurantMap from "../components/RestaurantMap"
import Layout from "../components/Layout"
import "./main.scss";

const IndexPage = ({ data }) => {
  const { allRestaurantsYaml: { nodes: restaurants } } = data;
  return (
    <>
    <SEO title="Home" />
    <Layout>
      <div className="main-container">
        <p>Click the stars for details about the restaurants.</p>
      </div>
      <section className="map">
        <RestaurantMap
          restaurants={restaurants}
        />
      </section>
    </Layout>
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
        opinion
        reviewSlug
        coords {
          lat
          lng
        }
      }
    }
  }
`

export default IndexPage
