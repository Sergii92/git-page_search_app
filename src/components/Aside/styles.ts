import styled from "styled-components";
import { respondToCustomWidth } from "../../asets/css/utils";
import { BREAKPOINT } from "../../constants/breakpoints";

export const AsideWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const Input = styled.input`
  border-radius: 20px;
  height: 30px;
  border: none;
  padding-left: 15px;
  outline: 0;
  width: 100%;
`;
export const Form = styled.form``;

export const AsideHeader = styled.h2`
  color: white;
`;

export const List = styled.ul`
  list-style-type: none;
  color: white;
`;

export const ListItem = styled.li`
  font-size: 24px;
  margin-bottom: 5px;
`;
