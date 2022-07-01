import styled from 'styled-components';
import ContentLogo from '../images/triple2x.png';

const ContentLogoStyle = styled.div`
  position: absolute;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: "rgba(58, 58, 58, 0.7)";
  background-size: 400px 338px;
  background-repeat: no-repeat;
  background-image: url(${ContentLogo});
`;

export default ContentLogoStyle;