import styled from "styled-components"
import { ipad, large } from "../../utils/screens"

const FilmsContainer = styled.article`
  display: block;
`

const FilmsFlex = styled.div`
  @media (min-width: ${ipad}) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (min-width: ${ipad}) {
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  @media (min-width: ${large}) {
    column-gap: 1rem;
  }
`

export { FilmsContainer, FilmsFlex }
