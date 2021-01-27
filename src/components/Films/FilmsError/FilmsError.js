import React from "react"
import {
  FilmsErrorContainer,
  FilmsErrorImg,
  FilmsErrorText,
  FilmsErrorButton,
} from "./FilmsError.style"
import errorRobotSvg from "../../../assets/FilmsError/error-robot.svg"

export default function FilmsError() {
  return (
    <FilmsErrorContainer className="glass-bg">
      <FilmsErrorImg src={errorRobotSvg} alt="films no founded" />
      <div>
        <FilmsErrorText>Films no founded...</FilmsErrorText>
        <FilmsErrorText>Reload the page to get the films</FilmsErrorText>
        <FilmsErrorButton>Go to home</FilmsErrorButton>
      </div>
    </FilmsErrorContainer>
  )
}
