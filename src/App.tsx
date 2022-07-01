import styled from 'styled-components';
import GlobalStyles from './themes/globalStyles';
import ContentLogo from './themes/contentLogoStyle';
import AwardStore from './themes/awardStoreStyle';
import AwardApple from './themes/awardAppleStyle';
import Metrics from './components/Metrics';

const MainStyle = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  height: auto;
  margin-left: 140px;
  margin-top: 140px;
`;

const Left = styled.div`
  margin-left: 623px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />

      <MainStyle>
          <ContentLogo>
            2021년 12월 기준
          </ContentLogo>

          <Left>
            <Metrics />
            <AwardStore>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </AwardStore>
            <AwardApple>
              2018 애플 앱스토어
              <br />
              오늘의 여행앱 선정
            </AwardApple>
          </Left>
      </MainStyle>
    </>
  );
}

export default App;
