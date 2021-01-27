import styled from "styled-components"
import { ipad, large } from "../../utils/screens"

const AboutLayoutContainer = styled.section`
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${ipad}) {
    justify-content: space-around;
    flex-wrap: nowrap;
    padding: 2rem;
    letter-spacing: 0.2px;
  }

  @media (min-width: ${large}) {
    padding: 2.2rem 2rem;
  }
`

const AboutLayoutImg = styled.img`
  transition: var(--transition);

  @media (min-width: ${ipad}) {
    display: none;
  }

  @media (min-width: ${large}) {
    display: block;
    width: 330px;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export { AboutLayoutContainer, AboutLayoutImg }
