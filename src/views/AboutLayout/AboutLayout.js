import React from "react"
import { AboutLayoutContainer, AboutLayoutImg } from "./AboutLayout.style"
import AboutText from "../../components/AboutText/AboutText"
import aboutIllustration from "../../assets/About/about-illustration.svg"

export default function AboutLayout() {
  return (
    <AboutLayoutContainer className="glass-bg">
      <AboutLayoutImg src={aboutIllustration} alt="About Me" />
      <AboutText />
    </AboutLayoutContainer>
  )
}
