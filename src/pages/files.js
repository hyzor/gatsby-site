import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Files({ data }) {
  return (
    <Layout>
      <Header headerText="Files" />
      <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Size</th>
              <th>Extension</th>
              <th>Created</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
                <td>{node.changeTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          id
          prettySize
          relativePath
          birthTime(fromNow: true)
          extension
          changeTime(fromNow: true)
        }
      }
    }
  }
`