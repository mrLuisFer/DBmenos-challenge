import styled from "styled-components"
import { ipad } from "../../../utils/screens"
import { GlobalButton } from "../../../styles/global-components/index.style"

const FilmsErrorContainer = styled.div`
  padding: 1rem;
  margin-top: 1rem;

  @media (min-width: ${ipad}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 1rem;
    width: 600px;
  }
`

const FilmsErrorImg = styled.img`
  @media (min-width: ${ipad}) {
    height: 320px;
    width: 320px;
  }
`

const FilmsErrorText = styled.p`
  @media (min-width: ${ipad}) {
    font-size: 1.4rem;
  }
`

const FilmsErrorButton = styled(GlobalButton)`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: var(--principal);
  box-shadow: var(--shadow);
  color: var(--white);

  @media (min-width: ${ipad}) {
    margin-left: auto;
    padding: 0.6rem;
  }
`

export { FilmsErrorContainer, FilmsErrorImg, FilmsErrorText, FilmsErrorButton }
