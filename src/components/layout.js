import React from "react"
import styled from "@emotion/styled"
import ListLink from "../components/listlink"
import { useStaticQuery, graphql } from "gatsby"

const StyledLayout = styled.div`
  margin: 3rem auto;
  max-width: 800px;
  padding: 0 1rem;
`

const List = styled.ul`
  list-style: none;
  float: right;
`

const Header = styled.header`
  margin-bottom: 1.5rem;
`

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <StyledLayout>
      <Header>
        <List>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/users/">Users</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/files/">Files</ListLink>
        </List>
        <h3>{data.site.siteMetadata.title}</h3>
      </Header>
      {children}
    </StyledLayout>
  )
}