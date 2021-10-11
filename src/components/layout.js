import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./global.css"
import "./layout.css"
import "./fonts.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div
        style={{
          margin: `2rem auto 0`,
          maxWidth: '95vw',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
<<<<<<< HEAD
        <Footer />
=======
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <p>© {new Date().getFullYear()}, the authors and Verein & Atelier Baustell <br></br> Bäckerstrasse 9, 8004 Zürich, Switzerland</p>
        </footer>
>>>>>>> a9baa1fc146fa9329dfcbf08fb0ceece628c2ea0
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout