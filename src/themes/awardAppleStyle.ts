import styled from 'styled-components';
import AwardStore from './awardStoreStyle';
import BadgeApple from '../images/badge-apple4x.png';

const AwardAppleStyle = styled(AwardStore)`
  margin-right: 0px;
  background-image: url(${BadgeApple});
`;

export default AwardAppleStyle;