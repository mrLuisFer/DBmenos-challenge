import React from "react";
import loaderInfinity from "../../assets/Loader/infinity-loader.svg";
import {
  LoaderContainer,
  LoaderImg,
  LoaderTitle,
  LoaderText,
} from "./Loader.style";

export default function Loader() {
  return (
    <LoaderContainer className="glass-bg">
      <LoaderImg src={loaderInfinity} alt="Loading..." loading="lazy" />
      <LoaderTitle>Welcome! :D</LoaderTitle>
      <LoaderText>Seras redirigido en unos momentos</LoaderText>
    </LoaderContainer>
  );
}
