import React, { useState } from "react"
import { Link } from "gatsby"
import "./layout.scss"

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)
  const navIcon = showNav ? 'x' : '\u2630'
  return (
    <div>
      <header>
        <div className="nav-container">
          <button className="nav-icon-button" onClick={() => setShowNav(!showNav)}>{navIcon}</button>
          {showNav && (<nav>
            <ul>
              <li>
                <p><Link to="/">Home</Link></p>
              </li>
              <li>
                <p><Link to="/about">More info</Link></p>
              </li>
              <li>
                <p><Link to="/reviews">Restaurant reviews</Link></p>
              </li>
            </ul>
          </nav>)
          }
        </div>
        <div className="title">
          <Link to="/"><h1>Singapore Bib Gourmand map</h1></Link>
          <p>The 58 Michelin awarded eateries on a map.</p>
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
