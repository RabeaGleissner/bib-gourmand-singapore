import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MapContainer from "../components/MapContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The bib gourmand spots in Singapore</h1>
    <MapContainer />
  </Layout>
)

export default IndexPage
