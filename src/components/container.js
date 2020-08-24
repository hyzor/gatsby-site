import React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
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