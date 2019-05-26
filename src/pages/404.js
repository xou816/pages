import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found"/>
      <h1>Not Found</h1>
      <p>This content does not exist (yet?).</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
