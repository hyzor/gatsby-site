import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" />
      <p>Send us a shitty message!</p>
    </Layout>
  )
}