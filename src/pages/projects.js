import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Project from "../components/project"


function Projects({ data, location }) {
  const detailed = data.projects.nodes.map(project => project.frontmatter.repository.name)
  return (
    <Layout location={location}>
      <SEO title="Projects"/>
      <h1>Projects</h1>
      {data.projects.nodes
        .map(project => <Project key={project.fields.slug} slug={project.fields.slug}
                                 fullDesc={false} {...project.frontmatter}/>)}
      {data.github && data.github.viewer.repositories.nodes
        .filter(node => node && !detailed.includes(node.name))
        .map(({ name, owner, description, repositoryTopics, primaryLanguage }) =>
          <Project key={name}
                   repository={{
                     name, owner: owner.login,
                   }}
                   title={`${owner.login}/${name}`}
                   description={description}
                   tags={[primaryLanguage.name].concat(repositoryTopics.nodes.map(n => n.topic.name))}/>)}
    </Layout>
  )
}

export default Projects

/*
    github {
      viewer {
        repositories(first: 20, orderBy: {field: STARGAZERS, direction: DESC}, privacy: PUBLIC) {
          nodes {
            name
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            owner {
              login
            }
            description
            primaryLanguage {
              name
            }
            url
          }
        }
      }
    }
 */

export const projectsQuery = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { hidden: { ne: true }, kind: { eq: "projects"} } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          tags
          url
          repository {
            owner
            name
          }
        }
      }
    }
  }
`