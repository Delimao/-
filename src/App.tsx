import styled from 'styled-components';
import GlobalStyles from './themes/globalStyles';
import TripleLogo from './themes/tripleLogoStyle';

const MainStyle = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  min-width: 1200px;
  height: auto;
  margin: 0 auto;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
        <TripleLogo>
          2021년 12월 기준
        </TripleLogo>
    </>
  );
}

export default App;
