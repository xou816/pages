import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import styled from "@emotion/styled"

const Heading = styled.h3({
  fontFamily: `Montserrat, sans-serif`,
  marginTop: 0,
})

const FooterText = styled.footer({
  color: "#999",
})

const Menu = styled.ul({
  listStyleType: "none",
})

const MenuItem = styled.li({
  ...scale(1 / 4),
  display: "inline-block",
  "&:after": {
    margin: rhythm(1 / 4),
    content: "\"\\2014\"",
  },
  "&:last-child:after": {
    content: "\"\"",
  },
})

function MenuEntry({ to, current, children }) {
  return (
    <MenuItem><Link style={current === to ? { boxShadow: "none" } : null} to={to}>{children}</Link></MenuItem>
  )
}

function Layout({ children, location }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  const current = location && location.pathname
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Heading>
          <Link style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }} to={`/`}>
            {title}
          </Link>
        </Heading>
        <Menu>
          <MenuEntry current={current} to="/experiences/">About</MenuEntry>
          <MenuEntry current={current} to="/projects/">Projects</MenuEntry>
          <MenuEntry current={current} to="/blog/">Stuff</MenuEntry>
        </Menu>
      </header>
      <main>{children}</main>
      <FooterText>
        <small>
          Contact: trendel.alexandre[at]gmail.com
        </small>
      </FooterText>
    </div>
  )
}

export default Layout