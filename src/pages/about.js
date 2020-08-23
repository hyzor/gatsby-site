import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function About() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Header headerText={"About"} />
      <p>This is a crappy website.</p>
    </Container>
  )
}