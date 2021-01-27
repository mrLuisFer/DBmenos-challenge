import styled from "styled-components"
import { ipad } from "../../utils/screens"
import { GlobalButton } from "../../styles/global-components/index.style"

const AboutTextContainer = styled.article`
  p {
    line-height: 1.3;
    letter-spacing: 0.1px;
    font-size: 0.95rem;
    font-weight: 600;

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

const AboutTextBtn = styled(GlobalButton)`
  padding: 0.7rem;
  background: var(--principal);
  color: var(--white);
  font-weight: 700;
  letter-spacing: 0.2px;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: var(--shadow);
  }

  i {
    margin-right: 0.5rem;
  }
`

export { AboutTextContainer, AboutTextBtn }
