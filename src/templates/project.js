import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Project from "../components/project"
import styled from "@emotion/styled"
import { scale } from "../utils/typography"

const CommitMessage = styled.blockquote({
  ...scale(1 / 50),
})

function pad(num) {
  return num.toString().padStart(2, "0")
}

function GithubActivity({ github }) {
  const commit = github.repository.ref.target
  const date = new Date(commit.committedDate)
  const fmt = `${pad(date.getDate())}/${pad(date.getMonth())}/${date.getFullYear()}`
  return (
    <>
      <h3>Latest activity on Github</h3>
      <a href={commit.url}>{fmt}</a>
      <CommitMessage>
        ({commit.abbreviatedOid}) {commit.author.name}: {commit.message}
      </CommitMessage>
    </>
  )
}

function ProjectDetails({ data, location, pageContext }) {
  const { github, details } = data

  return (
    <Layout location={location}>
      <SEO title={details.frontmatter.name}/>
      <Project {...details.frontmatter} description={details.html} fullDesc/>
      {github.repository && <GithubActivity github={github}/>}
    </Layout>
  )
}

export default ProjectDetails

export const pageQuery = graphql`
  query ProjectDetails($slug: String!, $repoOwner: String!, $repoName: String!) {
    details: markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        tags
        description
        url
        repository {
          owner
          name
        }
      }
    }
    github {
      repository(owner: $repoOwner, name: $repoName) {
        ref(qualifiedName: "master") {
          target {
            ... on GitHub_Commit {
              abbreviatedOid
              url
              committedDate
              message
              author {
                name
              }
            }
          }
        }
      }
    }
  }
`