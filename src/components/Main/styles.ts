import styled from "styled-components";
import { BREAKPOINT } from "../../constants/breakpoints";
import { respondToCustomWidth } from "../../asets/css/utils";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
}
  ${respondToCustomWidth(BREAKPOINT.laptop)} {
    flex-direction: column;
  }
`;
