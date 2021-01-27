import React from "react"
import {
  FilmsErrorContainer,
  FilmsErrorImg,
  FilmsErrorText,
  FilmsErrorButton,
} from "./FilmsError.style"
import errorRobotSvg from "../../../assets/FilmsError/error-robot.svg"
import { BrowserRouter, useHistory } from "react-router-dom"

export default function FilmsError() {
  let history = useHistory()

  const handlePushToHome = () => {
    history.go(0)
  }

  return (
    <BrowserRouter forceRefresh={true}>
      <FilmsErrorContainer className="glass-bg">
        <FilmsErrorImg src={errorRobotSvg} alt="films no founded" />
        <div>
          <FilmsErrorText>Films no founded...</FilmsErrorText>
          <FilmsErrorText>Reload the page to get the films</FilmsErrorText>
          <FilmsErrorButton onClick={handlePushToHome}>
            Go to home
          </FilmsErrorButton>
        </div>
      </FilmsErrorContainer>
    </BrowserRouter>
  )
}
