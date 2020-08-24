import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledListItem = styled.li`
  display: inline-block;
  margin-right: 1rem
`

export default function ListLink(props) {
  return (
    <StyledListItem>
      <Link to={props.to}>{props.children}</Link>
    </StyledListItem>
  )
}