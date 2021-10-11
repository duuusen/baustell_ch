import * as React from "react"
import { graphql } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Instagram from "../components/instagram"

const IndexPage = ({ data }) => {
  const profiles = data.allMarkdownRemark.nodes
  console.log(data)

  return (
    <Layout>
      <Instagram></Instagram>
      <Seo title="Home" />
      <section className="wrap">
      <Fade bottom distance={'10px'}>
        {profiles.map(profile => (
            <div className={`tile ${profile.frontmatter.style}`} key={profile.id}>
              <h2>{profile.frontmatter.name}</h2>
              <h3>{profile.frontmatter.description}</h3>
              <div dangerouslySetInnerHTML={{ __html: profile.html }} />
                <a className="website" href={profile.frontmatter.url}>Website →<br></br></a>
                <a className="contact" href={profile.frontmatter.email}>Contact →</a>
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
    allMarkdownRemark(sort: {fields: frontmatter___position, order: ASC}) {
      nodes {
        frontmatter {
          description
          email
          url
          name
          position
          style
        }
        html
        id
      }
    }
  }
`