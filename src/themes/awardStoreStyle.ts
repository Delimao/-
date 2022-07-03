import styled from 'styled-components';
import Fadein from '../animations/fadeinAnimation';
import AwardStoreLogo from '../images/play-store2x.png';
import { GRAY800 } from '../colors/colors';

// fadeinAnimation.ts 상속
const AwardStoreStyle = styled(Fadein)`
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
  background-image: url(${AwardStoreLogo});

  animation-delay: 200ms;
`;

export default AwardStoreStyle;