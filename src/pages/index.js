import * as React from "react"
import { graphql } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const profiles = data.allMarkdownRemark.nodes
  console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
      <section className="wrap">
      <Fade bottom distance={'50px'}>
        {profiles.map(profile => (
          
            <div className="tile" key={profile.id}>
              <h2>{profile.frontmatter.name}</h2>
              <h3>{profile.frontmatter.description}</h3>
              <div dangerouslySetInnerHTML={{ __html: profile.html }} />
              <a href={profile.frontmatter.url}>Website</a>
              <a href={profile.frontmatter.email}>Contact</a>
            </div>
          
        ))}
        </Fade>
      </section>
    </Layout>
  );

}

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___name, order: ASC}) {
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