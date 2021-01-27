import styled from "styled-components";

const LoaderContainer = styled.section`
  padding: 0 1rem;
  padding-bottom: 2rem;
  text-align: center;

  @media (min-width: var(--ipad)) {
    text-align: left;
  }
`;

const LoaderImg = styled.img`
  display: block;
  margin: 0 auto;
`;

const LoaderTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const LoaderText = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 0.9rem;
`;

export { LoaderContainer, LoaderImg, LoaderTitle, LoaderText };
