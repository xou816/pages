import styled from "@emotion/styled"
import { rhythm, THEME_BLUE } from "../utils/typography"
import React from "react"
import { Link } from "gatsby"

export const SimpleTag = styled.span({
  border: `1px solid ${THEME_BLUE}`,
  color: THEME_BLUE,
  borderRadius: "4px",
  padding: `${rhythm(1 / 10)} ${rhythm(2 / 10)}`,
})

const TagContainer = styled.div({
  margin: `${rhythm(1)} 0`,
  "> *": {
    marginRight: rhythm(1 / 2),
  },
})

export function Tag({ tag, ...otherProps }) {
  return (
    <SimpleTag {...otherProps}><Link style={{ boxShadow: "none" }}
                                     to={`/tags/${tag.toLowerCase()}`}>{tag.toLowerCase()}</Link></SimpleTag>
  )
}

export function TagList({ label, tags }) {
  return (
    <TagContainer>
      {label}{tags.map(tag => <Tag key={tag} tag={tag}/>)}
    </TagContainer>
  )
}