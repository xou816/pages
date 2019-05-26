import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { ExperiencesList } from "../components/experience"
import SEO from "../components/seo"

function Experiences({ data, location }) {
  const { jobs, cv } = data
  const current = jobs.nodes.find(job => job.isCurrent);
  return (
    <Layout location={location}>
      <SEO title="Experience and qualifications"/>
      <p>I currently live in France, where I am working for {current.company}.</p>
      <h1>Experience and qualifications</h1>
      <p>You might also want to have a look at my <a href={cv.publicURL} download>CV</a> or my <a href="https://www.linkedin.com/in/alexandre-trendel-93301b12b/">Linkedin</a>.</p>
      <ExperiencesList experiences={jobs.nodes}/>
    </Layout>
  )
}

export default Experiences

export const experiencesQuery = graphql`
  query {
    cv: file(relativePath: { eq: "cv_en.pdf" }) {
      publicURL
    }
    jobs: allJobsYaml {
      nodes {
        title
        isCurrent
        company
        details
        dates
        link
        tags
      }
    }
  }
`