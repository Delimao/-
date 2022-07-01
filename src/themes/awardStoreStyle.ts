import styled from 'styled-components';
import AwardStoreLogo from '../images/play-store2x.png';

const AwardStoreStyle = styled.div`
  display: inline-block;
  height: 54px;
  padding: 5px 0px 5px 62px;
  line-height: 22px;
  margin-top: 30px;
  margin-right: 39px;
  font-family: sans-serif;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  background-image: url(${AwardStoreLogo});
`;

export default AwardStoreStyle;