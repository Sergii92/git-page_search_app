export const respondToCustomWidth = (size, direction = "max") =>
  ` @media screen and (${direction}-width: ${size}px)`;
