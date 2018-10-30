import { keyframes } from "styled-components";

const bounceIn = keyframes`

  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default bounceIn;
