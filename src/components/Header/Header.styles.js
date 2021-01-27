import styled from "styled-components"
import { ipad, large } from "../../utils/screens"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 0.7rem 0;
  margin-bottom: 1rem;

  @media (min-width: ${ipad}) {
    width: 600px;
    margin: 0 auto 1rem auto;
    font-size: 1.3rem;
    justify-content: flex-end;
    column-gap: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: ${large}) {
    width: auto;
  }
`

export { HeaderContainer }
