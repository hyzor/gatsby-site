import React from "react"
import { css } from "@emotion/core"

// Using css prop provides a concise and flexible API to style the components. //
const underline = css`
  text-decoration: underline;
`

export default function Header(props) {
  return (
    <h1 css={underline}>
      {props.headerText}
    </h1>
  )
}