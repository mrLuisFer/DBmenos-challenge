import React from "react"
import {
  SearchContainer,
  SearchInput,
  SearchContainerInput,
  SearchText,
  SarchSortIcon,
  SearchFlex,
} from "./Search.style"

export default function Search({ setSearchTitle, handleSort }) {
  return (
    <SearchContainer>
      <SearchContainerInput>
        <label htmlFor="filmInput">
          <i className="fas fa-search"></i>
        </label>
        <SearchInput
          type="text"
          autoFocus={true}
          placeholder="Lets Search a movie..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </SearchContainerInput>

      <SearchFlex className="glass-bg">
        <SearchText fontSize=".8rem" className="glass-bg" margin="0 1rem 0 0">
          Sort by name:
        </SearchText>
        <SarchSortIcon
          className="fas fa-sort glass-bg"
          onClick={handleSort}
        ></SarchSortIcon>
      </SearchFlex>
    </SearchContainer>
  )
}
