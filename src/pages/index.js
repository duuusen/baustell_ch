import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor elit sed nunc molestie auctor. Morbi congue bibendum arcu, ac convallis ante viverra ac. Aliquam pulvinar, lectus non aliquam efficitur, lorem ante commodo ante, ac tincidunt mauris nulla et nisl. Donec iaculis maximus elit eu ultricies. Cras finibus gravida facilisis. In lobortis sollicitudin rhoncus. Integer condimentum, libero eu molestie cursus, dui nunc dignissim nulla, ac bibendum massa sem a mi. Aenean vehicula gravida nibh a aliquet.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
