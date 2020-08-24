import React from "react"
import styled from "@emotion/styled"
import ListLink from "../components/listlink"

const StyledLayout = styled.div`
  margin: 3rem auto;
  max-width: 650px;
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
  return (
    <StyledLayout>
      <Header>
        <List>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/users/">Users</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </List>
        <h3>My shitty website</h3>
      </Header>
      {children}
    </StyledLayout>
  )
}