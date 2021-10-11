import * as React from "react"

const Footer = () => (
<footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <p>© {new Date().getFullYear()}, the authors and baustell.ch</p>
        </footer>
  );

export default Footer