import styled from "styled-components"
import { ipad, large, mobile } from "../../utils/screens"

const SingleFilmContainer = styled.article`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: ${ipad}) {
    padding: 2rem 1.3rem;
    display: flex;
    flex-direction: row-reverse;
    column-gap: 1rem;
  }

  @media (min-width: ${large}) {
    padding: 2rem;
    max-width: 750px;
  }
`

const SingleFilmTitle = styled.h2`
  text-align: left;
  font-weight: 700;
`

const SingleFilmFlex = styled.div`
  @media (min-width: ${ipad}) {
    display: flex;
    align-items: center;
    column-gap: 3rem;
    justify-content: space-between;
  }
`

const SingleFilmText = styled.p`
  line-height: 1.4;
  letter-spacing: 0.1px;
  font-weight: 500;

  @media (min-width: ${mobile}) {
    text-align: left;
  }

  @media (min-width: ${ipad}) {
    line-height: 1.6;
    max-width: 600px;
    display: inline;
    text-align: ${(props) => props.txtAlign || "left"};
  }
`

const SingleFilmDate = styled.span`
  color: var(--title-color);
  font-weight: 600;
`

const FilmImg = styled.img`
  display: block;
  height: 250px;
  width: 100%;
  border-radius: var(--radius);
  /* margin: 0 auto; */

  @media (min-width: ${ipad}) {
    width: 220px;
  }
`

export {
  SingleFilmContainer,
  SingleFilmTitle,
  SingleFilmFlex,
  SingleFilmText,
  SingleFilmDate,
  FilmImg,
}
