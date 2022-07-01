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
  height: auto;
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
        
          <ContentLogo />

          <LeftMargin>
            <Metrics />
            <Awards />
          </LeftMargin>

      </MainStyle>
    </>
  );
}

export default App;
