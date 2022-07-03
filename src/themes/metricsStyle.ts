import styled from 'styled-components';
import Fadein from '../animations/fadeinAnimation';
import { GRAY } from '../colors/colors';

// fadeinAnimation.ts 상속
const MetricsStyle = styled(Fadein)`
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: ${ GRAY };

  font-family: sans-serif;
  font-size: 36px;

  animation-delay: 100ms;
`;

export default MetricsStyle;