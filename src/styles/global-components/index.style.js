import styled from "styled-components"

const GlobalAnchor = styled.a`
  text-decoration: none;
  color: var(--text-color);
  margin: 0 0.5rem;
  padding: 0;
`

const GlobalButton = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: var(--radius);
`

export { GlobalAnchor, GlobalButton }
