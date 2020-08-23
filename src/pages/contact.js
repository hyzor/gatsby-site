import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Contact() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a shitty message!</p>
    </Container>
  )
}