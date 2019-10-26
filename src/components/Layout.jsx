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
              <li><p><Link to="/">Home</Link></p></li>
              <li>
                <button className="more-info-button" onClick={() => setShowMoreInfo(!showMoreInfo)}>
                  <div>
                    <p className="more-info-button-link">About Bib Gourmand</p>
                  </div>
                </button>
              </li>
              <li><p><Link to="/reviews">Restaurant reviews</Link></p></li>
            </ul>
          </nav>)
          }
        </div>
        <div className="title">
          <Link to="/"><h1>Singapore Bib Gourmand map</h1></Link>
          <p>The 58 Michelin awarded eateries on a map.</p>
        </div>
          {showMoreInfo && <MoreInfo closeMoreInfo={() => {
            setShowMoreInfo(false)
            window.scrollTo(0, 0)
          }
          }/>}
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
