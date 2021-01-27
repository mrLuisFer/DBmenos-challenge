import styled from "styled-components"
import { ipad, large } from "../../utils/screens"

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;

  @media (min-width: ${ipad}) {
    width: 600px;
    margin: 0 auto;
  }

  @media (min-width: ${large}) {
    width: 900px;
    justify-content: space-around;
  }
`

const SearchContainerInput = styled.span`
  display: flex;
  align-items: center;
  background: var(--white);
  padding: 0.5rem;
  border-radius: var(--radius);
  opacity: 0.9;
  width: auto;

  @media (min-width: ${ipad}) {
    width: 100%;
    width: 350px;
    font-size: 1.2rem;
  }
`

const SearchInput = styled.input`
  border: none;
  padding-left: 0.5rem;
  outline: none;
  opacity: 0.8;
  width: 100%;
`

const SearchText = styled.span`
  display: none;

  @media (min-width: ${ipad}) {
    margin: ${(props) => props.margin || "0px"};
    font-size: ${(props) => props.fontSize || "1.2rem"};
    font-weight: 600;
    padding: 0.4rem 0.6rem;
    display: inline-block;
  }

  @media (min-width: ${large}) {
    font-size: 1.2rem;
  }
`

const SarchSortIcon = styled.i`
  padding: 0.6rem 0.85rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`

const SearchFlex = styled.div`
  display: flex;
`

export {
  SearchContainer,
  SearchInput,
  SearchContainerInput,
  SearchText,
  SarchSortIcon,
  SearchFlex,
}
