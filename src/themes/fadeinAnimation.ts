import styled from 'styled-components';

const FadeinAnimation = styled.div`
  opacity: 0;

  animation: fadein 700ms ease-in-out;
  animation-fill-mode: forwards;

  -moz-animation: fadein 700ms ease-in-out; /* FireFox */
  -moz-animation-fill-mode: forwards; /* FireFox */

  -webkit-animation: fadein 700ms ease-in-out; /* Safari and Chrome */
  -webkit-animation-fill-mode: forwards; /* Safari and Chrome */

  -o-animation: fadein 700ms ease-in-out; /* Opera */
  -o-animation-fill-mode: forwards; /* Opera */
  
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

  /* FireFox */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  /* Safari and Chrome */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  /* Opera */
  @-o-keyframes fadein {
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