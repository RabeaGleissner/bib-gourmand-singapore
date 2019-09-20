import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div class='main-container'>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by a hungry <a href="http://rabea.dev">Rabea</a>.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
