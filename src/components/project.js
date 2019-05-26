import { TagList } from "./tags"
import React from "react"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const HeadingLarge = styled.h1({
  marginBottom: rhythm(1 / 3),
})

const HeadingSmall = styled.h3({
  marginBottom: rhythm(1 / 3),
})


export default function({ title, slug, url, repository, description, tags, fullDesc }) {
  return (
    <div>
      {fullDesc ? <HeadingLarge>{title}</HeadingLarge> : <HeadingSmall>{title}</HeadingSmall>}
      <p>
        {url && <><a href={url}>View</a> &mdash; </>}
        {!fullDesc && slug && <><Link to={slug}>Learn more</Link> &mdash; </>}
        <a href={`https://github.com/${repository.owner}/${repository.name}`}>Github</a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: description }}/>
      <small><TagList tags={tags}/></small>
    </div>
  )
}
