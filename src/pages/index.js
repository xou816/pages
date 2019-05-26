import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

function HomePage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Home"/>
      <Bio>
        <h3 style={{margin: `${rhythm(1 / 2)} 0`}}>Hi!</h3>
        <p>Welcome to my personal website.</p>
      </Bio>
    </Layout>
  )
}

export default HomePage