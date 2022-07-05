import styled from 'styled-components';
import Fadein from '../animations/FadeInAnimation';
import { Apple, Store } from '../paths/ImagesPath';
import { GRAY800 } from '../colors/Colors';

// fadeinAnimation.ts 상속
const AwardStore = styled( Fadein )`
  display: inline-block;
  padding: 5px 0px 5px 62px;
  margin-top: 30px;
  margin-right: 39px;
  line-height: 22px;
  height: 54px;

  font-family: sans-serif;
  font-weight: bold;
  color: ${ GRAY800 };

  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  background-image: url(${ Store });

  animation-delay: 200ms;
`;

const AwardApple = styled( AwardStore )`
  background-image: url(${ Apple });
`;

export { AwardStore, AwardApple };