import Metric from '../themes/MetricsStyle';
import useCount from '../hooks/useCount';

const Metrics = () => {
  const people = useCount(700);
  const review = useCount(100);
  const calender = useCount(470);

  return(
    <>
      <Metric>
        <strong>{people}만 명</strong>의 사용자
      </Metric>
      <Metric>
        <strong>{review}만 개</strong>의 여행 리뷰
      </Metric>
      <Metric>
        <strong>{calender}만 개</strong>의 여행 일정
      </Metric>
    </>
  );
}

export default Metrics;