import React from "react";
import {
  HeaderWrapper,
  LogoWrapper,
  LogoImg,
  Tile,
  Text,
  HeaderDesc,
} from "./styles";

export const Header: React.FC<{}> = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg />
        <Tile>
          <Text size="26px">reQuestum</Text>
          <Text> web development company</Text>
        </Tile>
      </LogoWrapper>
      <HeaderDesc>
        <Text>Github users search app</Text>
      </HeaderDesc>
    </HeaderWrapper>
  );
};
