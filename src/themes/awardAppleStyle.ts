import styled from 'styled-components';
import AwardStore from './awardStoreStyle';
import AwardApple from '../images/badge-apple4x.png';

// awardStore.ts 상속, image url 변경
const AwardAppleStyle = styled(AwardStore)`
  background-image: url(${AwardApple});
`;

export default AwardAppleStyle;