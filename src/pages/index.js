import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Container>
      <Link to="/users/">Users</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
      <Header headerText={"Welcome to my crappy site!"} />
    </Container>
    </Layout>
  )
}
