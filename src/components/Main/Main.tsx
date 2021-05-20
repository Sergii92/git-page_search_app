import React from "react";
import { Aside, Props as AsideTypes } from "../Aside/Aside";
import { Section } from "../Section/Section";

import { MainWrapper } from "./styles";

export const Main: React.FC<AsideTypes> = ({ debounced }) => {
  return (
    <MainWrapper>
      <Aside debounced={debounced}></Aside>
      <Section />
    </MainWrapper>
  );
};
