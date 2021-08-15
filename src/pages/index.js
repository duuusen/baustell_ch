import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)

return (
  <Layout>
    <Seo title="Home" />
    <p>hallo fabiLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor elit sed nunc molestie auctor. Morbi congue bibendum arcu, ac convallis ante viverra ac. Aliquam pulvinar, lectus non aliquam efficitur, lorem ante commodo ante, ac tincidunt mauris nulla et nisl. Donec iaculis maximus elit eu ultricies. Cras finibus gravida facilisis. In lobortis sollicitudin rhoncus. Integer condimentum, libero eu molestie cursus, dui nunc dignissim nulla, ac bibendum massa sem a mi. Aenean vehicula gravida nibh a aliquet.</p>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          description
          link
          name
        }
        html
        id
      }
    }
  }
`