import styled from "styled-components"
import { ipad } from "../../utils/screens"

const AboutTextContainer = styled.article`
  p {
    line-height: 1.3;
    letter-spacing: 0.1px;
    font-size: 0.95rem;

    @media (min-width: ${ipad}) {
      text-align: left;
      line-height: 1.5;
      font-size: 1.05rem;
      display: block;
      max-width: 555px;
    }

    a {
      text-decoration: none;
      color: var(--text-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export { AboutTextContainer }
