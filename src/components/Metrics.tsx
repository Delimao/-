import Theme from '../themes/metricsStyle';
import useCount from '../hooks/useCount';

const Metrics = () => {
  return(
    <>
      <Theme>
        <strong>{useCount(700)}만 명</strong>의 사용자
      </Theme>
      <Theme>
        <strong>{useCount(100)}만 개</strong>의 여행 리뷰
      </Theme>
      <Theme>
        <strong>{useCount(470)}만 개</strong>의 여행 일정
      </Theme>
    </>
  );
}

export default Metrics;