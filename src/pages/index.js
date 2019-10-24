import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import RestaurantMap from "../components/RestaurantMap"
import MoreInfo from "../components/MoreInfo"

import './main.scss';

const IndexPage = ({ data }) => {
  const { allRestaurantsYaml: { nodes: restaurants } } = data;
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  return (
    <>
      <SEO title="Home" />
      <div className="main-container">
        <h1>Singapore Bib Gourmand map</h1>
        <p>Find the 58 Michelin awarded eateries in Singapore.</p>
        <p>Click the stars for details about the restaurants.</p>
        <div className="more-info-button-container">
          <button className="more-info-button" onClick={() => setShowMoreInfo(!showMoreInfo)}>
            <div>
              <p className="more-info-button-link">About Bib Gourmand</p>
            </div>
          </button>
          <Link to="/reviews/"></Link>
    </div>
        {showMoreInfo && <MoreInfo closeMoreInfo={() => {
          setShowMoreInfo(false)
          window.scrollTo(0, 0)
        }
        }/>}
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
