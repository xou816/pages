const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function createTags(graphql, actions) {
  const { createPage } = actions
  const component = path.resolve(`./src/templates/by-tag.js`)

  return graphql(
    `
    {
      posts: allMarkdownRemark(limit: 1000, filter: {frontmatter: {hidden: {ne: true}}}) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `,
  ).then(({ data, errors }) => {
    if (errors) {
      throw errors
    }
    const allTags = data.posts.nodes.reduce((tags, { frontmatter }) => {
      const newTags = (frontmatter.tags || []).filter(tag => !tags.includes(tag))
      return tags.concat(newTags)
    }, [])

    allTags.forEach(tag => {
      createPage({
        path: `tags/${tag}`,
        component,
        context: {
          tag,
        },
      })
    })
  })
}

function createProject(graphql, actions) {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project.js`)

  return graphql(
    `
      {
        allMarkdownRemark(limit: 1000, filter: {frontmatter: {kind: {eq: "projects"}}}) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              repository {
                owner
                name
              }
            }
          }
        }
      }
    `,
  )
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create blog posts pages.
      const projects = result.data.allMarkdownRemark.nodes

      projects.forEach(project => {

        createPage({
          path: project.fields.slug,
          component: projectTemplate,
          context: {
            slug: project.fields.slug,
            repoOwner: project.frontmatter.repository.owner,
            repoName: project.frontmatter.repository.name,
          },
        })
      })

      return null
    })
}

function createBlog(graphql, actions) {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return graphql(
    `
      {
        allMarkdownRemark(limit: 1000, filter: {frontmatter: {kind: {eq: "blog"}}}) {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `,
  )
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.nodes

      posts.forEach(post => {

        createPage({
          path: post.fields.slug,
          component: blogPost,
          context: {
            slug: post.fields.slug,
          },
        })
      })

      return null
    })
}

exports.createPages = ({ graphql, actions }) => {
  return Promise.all([
    createBlog(graphql, actions),
    createTags(graphql, actions),
    createProject(graphql, actions)
  ])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/${node.frontmatter.kind}${value}`,
    })
  }
}
