import styled from "styled-components";

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
`;

export const LogoWrapper = styled.div`
  width: 30%;
  max-width: 500px;
  display: flex;
`;

export const LogoImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-right: 10px;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
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
