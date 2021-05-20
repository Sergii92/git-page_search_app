import React from "react";
import { Aside } from "components/Aside/Aside";
import { Section } from "components/Section/Section";

import { MainWrapper } from "./styles";

export const Main = ({ debounced }) => {
  return (
    <MainWrapper>
      <Aside debounced={debounced}></Aside>
      <Section />
    </MainWrapper>
  );
};
