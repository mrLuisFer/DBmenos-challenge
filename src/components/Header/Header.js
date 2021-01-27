import React from "react"
import { Link } from "react-router-dom"
// Styles
import { HeaderContainer } from "./Header.styles"

export default function Header() {
  return (
    <HeaderContainer className="glass-bg">
      <Link to="/" className="Link">
        Home
      </Link>
      <Link to="/about" className="Link">
        About
      </Link>
    </HeaderContainer>
  )
}
