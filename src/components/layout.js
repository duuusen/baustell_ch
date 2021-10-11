import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./global.css"
import "./layout.css"

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
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout