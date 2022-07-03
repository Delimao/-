import styled from 'styled-components';
import GlobalStyles from './themes/globalStyles';
import ContentLogo from './components/ContentLogo';
import Awards from './components/Awards';
import Metrics from './components/Metrics';

const MainStyle = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  min-width: 1200px;
  height: 100%;
  margin-left: 140px;
  margin-top: 140px;
`;

const LeftMargin = styled.div`
  margin-left: 623px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainStyle>
          {/* 트리플 로고 출력 */}
          <ContentLogo />
          {/* margin-left로 위치 조절 */}
          <LeftMargin>
            {/* Metrics 출력 */}
            <Metrics />
            {/* Awards 출력 */}
            <Awards />
          </LeftMargin>
      </MainStyle>
    </>
  );
}

export default App;
