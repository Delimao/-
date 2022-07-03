import styled from 'styled-components';

const FadeinAnimation = styled.div`
  animation: fadein 700ms;
  animation-timing-function: ease-in-out;
  
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export default FadeinAnimation;