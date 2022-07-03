import Metric from '../themes/metricsStyle';
import useCount from '../hooks/useCount';

const Metrics = () => {
  return(
    <>
      <Metric>
        <strong>{useCount(700)}만 명</strong>의 사용자
      </Metric>
      <Metric>
        <strong>{useCount(100)}만 개</strong>의 여행 리뷰
      </Metric>
      <Metric>
        <strong>{useCount(470)}만 개</strong>의 여행 일정
      </Metric>
    </>
  );
}

export default Metrics;