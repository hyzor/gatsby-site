import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header headerText={"Welcome to my crappy site!"} />
      <p>
        Just another useless website on the interwebs.
      </p>
    </Layout>
  )
}
