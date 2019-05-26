import Layout from "../components/layout"
import React from "react"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { Tag } from "../components/tags"
import SEO from "../components/seo"

function BlogByTag({ data, location, pageContext }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title={`Articles for tag ${pageContext.tag}`}/>
      <h3>Tag: <Tag tag={pageContext.tag}/></h3>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogByTag

export const pageQuery = graphql`
  query BlogPostByTag($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] }, hidden: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`