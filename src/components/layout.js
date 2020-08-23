import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
const Wrapper = styled("div")`
  border: 2px solid black;
  padding: 10px;
`
export default function Layout({ children }) {
  return (
    <Wrapper>
      <Global
        styles={css`
          div {
            background: lightblue;
            color: white;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}