import styled from "styled-components"
import { GlobalButton } from "../../styles/global-components/index.style"
import { ipad, large } from "../../utils/screens"

const FilmCard = styled.div`
  padding: 1rem;
  padding-top: 0.8rem;
  padding-bottom: 1.5rem;
  max-width: 300px;
  margin: 1.5rem auto;
  transition: var(--transition);

  @media (min-width: ${ipad}) {
    margin: 1.5rem 0;
    width: 270px;
  }

  @media (min-width: 800px) {
    width: 300px;
  }

  @media (min-width: ${large}) {
    min-height: 330px;
  }

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`

const FilmTitle = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  margin-bottom: 1rem;
  color: var(--title-color);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const FilmText = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;

  @media (min-width: ${ipad}) {
    font-size: 1rem;
  }
`

const FilmDescription = styled(FilmText)`
  line-height: 1.5;
  letter-spacing: 0.5px;
  margin-top: 1rem;
`

const FilmRateText = styled(FilmText)`
  display: flex;
  align-items: center;
  font-weight: 300;

  i {
    margin: 0 0.4rem;
    color: var(--principal);
  }
`

const FilmRate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);

  &:hover {
    color: var(--title-color);
  }
`

const FilmRateButton = styled(GlobalButton)`
  margin-top: 2rem;
  background: var(--secundario);
  color: var(--white);
  padding: 0.5rem 0.7rem;
  display: block;
  margin-left: auto;
  margin-right: 0.5rem;
  transition: var(--transition);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  @media (min-width: ${ipad}) {
    font-size: 1.2rem;
  }

  &:active {
    background: var(--principal);
  }

  &:hover {
    box-shadow: var(--shadow-hover);
    transform: scale(1.05);
  }
`

export {
  FilmCard,
  FilmTitle,
  FilmRate,
  FilmDescription,
  FilmRateText,
  FilmRateButton,
}
