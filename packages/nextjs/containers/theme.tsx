import { css, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { normalize } from "polished";
import React, { Fragment } from "react";
import { colors, theme } from "../libraries/theme";

const globalStyles = css`
  ${normalize()}
  html {
    background: white;
    font-family: "Mukta", sans-serif;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    font-size: 1em;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    font-family: "Mukta", sans-serif;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    outline-style: none;
  }

  body {
    background: white;
    font-family: "Mukta", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "calt" 0;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    perspective: 1000px;
    line-height: 1.45;
  }

  body::-webkit-scrollbar {
    width: 5px;
    background-color: #f0f0f0;
    border-radius: 30px;
    overflow: hidden;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #c5c5c5;
    border-radius: 30px;
    overflow: hidden;
  }

  ::selection {
    background-color: ${colors.primary};
    text-shadow: none;
  }

  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  p {
    font-family: "Mukta", sans-serif;
    transition: 0.5s;
  }

  h3 {
    font-family: "Mukta", sans-serif;
  }

  a {
    font-family: "Mukta", sans-serif !important;
    transition: 0.5s !important;
    text-decoration: none !important;
    color: inherit !important;
  }
`;

export const ThemeFunc = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={globalStyles} />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};
