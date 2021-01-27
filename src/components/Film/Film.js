import React from "react"
import { useHistory } from "react-router-dom"
import {
  FilmCard,
  FilmTitle,
  FilmRate,
  FilmDescription,
  FilmRateText,
  FilmRateButton,
} from "./Film.style"
import { truncate } from "../../utils/truncateFunction"

export default function Film({ title, director, rt_score, description, id }) {
  let history = useHistory()

  const handleOpenFilm = () => {
    history.push(`/film/${id}`)
  }

  return (
    <FilmCard id={id} className="glass-bg">
      <FilmTitle onClick={handleOpenFilm}>{title}</FilmTitle>
      <FilmRate>
        <FilmRateText>
          <i className="fas fa-film"></i> {director}
        </FilmRateText>
        <FilmRateText>
          {rt_score}
          <i className="fas fa-star-half-alt"></i>
        </FilmRateText>
      </FilmRate>
      <FilmDescription>{truncate(description, 230)}</FilmDescription>
      <FilmRateButton onClick={handleOpenFilm}>Know More</FilmRateButton>
    </FilmCard>
  )
}
