import styled from "styled-components";
import { BREAKPOINT } from "../../constants/breakpoints";
import { respondToCustomWidth } from "../../asets/css/utils";

export const SectionWrapper = styled.div`
  width: 70%;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    margin 0 auto;
    width:100%
  }
`;

export const Item = styled.div`
  max-width: 400px;
  width: 40%;
  height: max-content;
  border: 1px solid white;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
  height: auto;
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    width: 90%;
  }
`;

export const LinkItem = styled.a`
  color: black;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
    color: #ccc;
  }
`;

export const ItemTile = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const ItenProperties = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 16px;
  overflow: auto;
`;
