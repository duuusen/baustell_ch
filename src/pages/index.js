import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const profiles = data.allMarkdownRemark.nodes

return (
  <Layout>
    <Seo title="Home" />
    <div>
      {profiles.map(profile => (
          <div key={profile.id}>
            <h2>{profile.frontmatter.name}</h2>
            <h3>{profile.frontmatter.description}</h3>
            <section dangerouslySetInnerHTML={{ __html: profile.html }} />
            <a href={profile.frontmatter.url}>Website</a>
            <a href={profile.frontmatter.email}>Contact</a>
          </div>
      ))}
    </div>
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
          email
          url
          name
        }
        html
        id
      }
    }
  }
`