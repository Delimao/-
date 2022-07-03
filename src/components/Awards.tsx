import { AwardStore, AwardApple } from '../themes/awardsStyle';

const Awards = () => {
  return (
    <>
      <AwardStore title="구글 플레이스토어 뱃지">
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </AwardStore>
      <AwardApple title="애플 앱스토어 뱃지">
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AwardApple>
    </>
  );
}

export default Awards;