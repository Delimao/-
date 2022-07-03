import styled from 'styled-components';
import AwardStore from './awardStoreStyle';
import BadgeApple from '../images/badge-apple4x.png';

// AwardStore 중, url 변경
const AwardAppleStyle = styled(AwardStore)`
  background-image: url(${BadgeApple});
`;

export default AwardAppleStyle;