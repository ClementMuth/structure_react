import { App } from "../../components/common";
// const Footer = dynamic(() => import("../../components/footer").then((mod) => mod.Footer));

// import { Nav } from "../../components/navbar";
import React from "react";
import styled from "@emotion/styled";
// import dynamic from "next/dynamic";

const Main = styled.main`
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-drag: none;
  -webkit-user-select: text !important;
  background-color: white;
  margin: 0 auto;
  order: 5;
  touch-action: pan-y;
  user-select: none;
  user-select: text !important;
  width: 100%;
`;

export const DefaultCon: React.FC<{ footer?: boolean; noOverflow?: boolean }> = ({
  // footer = true,
  noOverflow = false,
  children
}) => {
  if (typeof window !== "undefined") {
    if (noOverflow) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "unset";
  }

  return (
    <App>
      {/* <Nav /> */}
      <Main>{children}</Main>
      {/* {footer && <Footer />} */}
    </App>
  );
};
