import React, { useEffect, useState } from "react"
import Film from "../Film/Film"
import { FilmsContainer, FilmsFlex } from "./Films.style"
import Search from "../Search/Search"
import FilmsError from "./FilmsError/FilmsError"
// I prefer use fetch but for some reason, fetch gave me an error
import axios from "axios"

export default function Films() {
  const [films, setFilms] = useState([])
  const [filteredFilms, setFilteredFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortFilms, setSortFilms] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        setFilms(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setFilteredFilms(
      films.filter((film) =>
        film.title?.toLowerCase().includes(searchTitle?.toLowerCase())
      )
    )
  }, [searchTitle, films])

  const handleSort = () => {
    setSortFilms(!sortFilms)
    console.log(sortFilms)
  }

  const handleSortAsc = (a, b) => {
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()

    let comparison = 0
    if (titleA > titleB) {
      comparison = 1
    } else if (titleA < titleB) {
      comparison = -1
    }
    return comparison
  }

  const handleSortDesc = (a, b) => {
    const titleA = a.title.toUpperCase()
    const titleB = b.title.toUpperCase()

    let comparison = 0
    if (titleA < titleB) {
      comparison = 1
    } else if (titleA > titleB) {
      comparison = -1
    }
    return comparison
  }

  useEffect(() => {
    if (sortFilms) {
      filteredFilms.sort(handleSortAsc)
    } else {
      filteredFilms.sort(handleSortDesc)
    }
  }, [sortFilms, filteredFilms])

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <FilmsContainer>
          <Search setSearchTitle={setSearchTitle} handleSort={handleSort} />
          <FilmsFlex>
            {filteredFilms.length <= 0 ? (
              <FilmsError />
            ) : (
              <>
                {filteredFilms?.map((film) => (
                  <Film {...film} key={film.id} />
                ))}
              </>
            )}
          </FilmsFlex>
        </FilmsContainer>
      )}
    </>
  )
}
