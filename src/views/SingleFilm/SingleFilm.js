import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {
  SingleFilmContainer,
  SingleFilmTitle,
  SingleFilmText,
  SingleFilmDate,
  SingleFilmFlex,
  FilmImg,
} from "./SingleFilm.style"

export default function SingleFilm() {
  const [filmData, setFilmData] = useState([])
  const [loading, setLoading] = useState(true)

  let { id } = useParams()
  console.log(id)

  useEffect(() => {
    axios
      .get(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then((res) => {
        setFilmData(res.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [id])

  console.log(filmData)

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <SingleFilmContainer className="glass-bg">
          <FilmImg src="https://picsum.photos/300" alt="film" />
          <div>
            <SingleFilmTitle>{filmData.title}</SingleFilmTitle>
            <SingleFilmFlex>
              <SingleFilmText>
                <SingleFilmDate>Director:</SingleFilmDate> {filmData.director}
              </SingleFilmText>
              <SingleFilmText txtAlign="right">
                <SingleFilmDate>Producer:</SingleFilmDate> {filmData.producer}
              </SingleFilmText>
            </SingleFilmFlex>
            <SingleFilmFlex>
              <SingleFilmText>
                <SingleFilmDate>Date:</SingleFilmDate> {filmData.release_date}
              </SingleFilmText>
              <SingleFilmText txtAlign="right">
                <SingleFilmDate>Score:</SingleFilmDate> {filmData.rt_score}
              </SingleFilmText>
            </SingleFilmFlex>
            <SingleFilmText>{filmData.description}</SingleFilmText>
          </div>
        </SingleFilmContainer>
      )}
    </>
  )
}
