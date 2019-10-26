import React, { useState } from "react"
import { Link } from "gatsby"
import MoreInfo from "../components/MoreInfo"
import "./layout.scss"

const Layout = ({ children }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const navIcon = showNav ? 'x' : '\u2630'
  return (
    <div>
      <header>
        <div className="nav-container">
          <button class="nav-icon-button" onClick={() => setShowNav(!showNav)}>{navIcon}</button>
          {showNav && (<nav>
            <ul>
              <li>
                <button className="more-info-button" onClick={() => setShowMoreInfo(!showMoreInfo)}>
                  <div>
                    <p className="more-info-button-link">About Bib Gourmand</p>
                  </div>
                </button>
              </li>
              <li><p><Link to="#">Restaurant reviews (coming soon)</Link></p></li>
            </ul>
          </nav>)
          }
        </div>
        <div className="title">
          <h1>Singapore Bib Gourmand map</h1>
          <p>The 58 Michelin awarded eateries on a map.</p>
          {showMoreInfo && <MoreInfo closeMoreInfo={() => {
            setShowMoreInfo(false)
            window.scrollTo(0, 0)
          }
          }/>}
      </div>
    </header>
    {children}
    <div className="main-container">
      <footer>
        © {new Date().getFullYear()}, Built by a hungry <a href="http://rabea.dev">Rabea</a>.
    </footer>
  </div>
</div>
)
}

export default Layout