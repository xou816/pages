import styled from "@emotion/styled"
import { rhythm, scale, THEME_BLUE } from "../utils/typography"
import React from "react"
import logo from "../utils/logos"
import { TagList } from "./tags"

const ExperiencesContainer = styled.ul({
  listStyleType: "none",
  borderLeft: "2px solid #CCC",
  paddingLeft: rhythm(2),
})

const mainItem = {
  content: "'\\25C9'",
  fontSize: rhythm(1),
  lineHeight: rhythm(4/5),
  height: rhythm(1),
  left: rhythm(-2 - 1/2),
  color: THEME_BLUE,
  background: "white",
}

const regularItem = {
  content: "'\\25CF'",
  fontSize: rhythm(1/2),
  lineHeight: rhythm(2/5),
  height: rhythm(1/2),
  left: rhythm(-2 - 1/4),
  color: "#555",
  background: "white",
}

const Summary = styled.li(({ isCurrent }) => ({
  position: "relative",
  margin: `${rhythm(2)} 0`,
  "&:after": {
    position: "absolute",
    top: rhythm(1/3),
    ...(isCurrent ? mainItem : regularItem)
  },
}))

const Title = styled.h4({
  marginTop: rhythm(1 / 4),
  marginBottom: rhythm(1 / 3),
})

export function ExperiencesList({ experiences }) {
  return (
    <ExperiencesContainer>
      {experiences.map(ex => <Experience key={ex.title} {...ex} />)}
    </ExperiencesContainer>
  )
}

export function Experience({ isCurrent, title, dates, details, link, company, tags }) {
  const Logo = logo(company)
  return (
    <Summary key={title} isCurrent={isCurrent}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ boxShadow: "none" }}><Logo height={1}/></a>
      <Title>{title}</Title>
      <small>{dates}</small>
      <div style={{ marginTop: rhythm(1) }} dangerouslySetInnerHTML={{ __html: details }}/>
      <small><TagList label="More: " tags={[company].concat(tags || [])}/></small>
    </Summary>
  )
}