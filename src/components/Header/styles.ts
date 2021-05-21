import styled from "styled-components";
import { respondToCustomWidth } from "../../asets/css/utils";
import { BREAKPOINT } from "../../constants/breakpoints";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  position: relative;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 2px;
    background-color: #d1cbae;
    opacity: 0.7;
  }
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

export const LogoWrapper = styled.div`
  width: 30%;
  max-width: 500px;
  display: flex;
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    width: 100%;
  }
`;

export const LogoImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 10px;
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    display: none;
  }
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    display: block;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: ${(props: { size?: string }) => props.size};
  color: #d1cbae;
  margin: 0px;
  line-height: 1em;
`;
export const HeaderDesc = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
