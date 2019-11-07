import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="title">
          <Link to="/"><h1>Singapore Bib Gourmand map</h1></Link>
          <p>The 58 Michelin awarded eateries on a map.</p>
          <nav>
            <ul>
              <Link activeClassName="current-page" to="/">
                <li><p>Map</p></li>
              </Link>
              <Link activeClassName="current-page" to="/about">
                <li>
                  <p>More info</p>
                </li>
              </Link>
              <Link partiallyActive={true} activeClassName="current-page" to="/reviews">
                <li>
                  <p>Reviews</p>
                </li>
              </Link>
            </ul>
          </nav>
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
