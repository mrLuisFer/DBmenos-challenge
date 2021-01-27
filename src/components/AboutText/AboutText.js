import React, { useState } from "react"
import { AboutTextContainer, AboutTextBtn } from "./AboutText.style"
import AboutTextEs from "./AboutText-lang/AboutTextEs.js"
import AboutTextEn from "./AboutText-lang/AboutTextEn"

export default function AboutText() {
  const [changeLanguage, setChangeLanguage] = useState(true)

  const handleChangeLang = () => {
    setChangeLanguage(!changeLanguage)
  }

  return (
    <AboutTextContainer>
      {changeLanguage ? <AboutTextEn /> : <AboutTextEs />}
      <AboutTextBtn onClick={handleChangeLang}>
        <i className="fas fa-language"></i>
        {changeLanguage ? "Cambiar Lenguaje" : "Change Language"}
      </AboutTextBtn>
    </AboutTextContainer>
  )
}
