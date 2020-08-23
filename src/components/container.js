import React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}