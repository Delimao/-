import { useState, useEffect } from 'react';
import EaseOut from '../animations/EaseOutExpo'

const useCount = ( num: number ): number => {
  const [ count, setCount ] = useState<number>(0);

  // useEffect dependency를 prop으로 설정, 호출시 자동 실행
  useEffect(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const stepTime = Math.round( duration / frameRate );
    let currentNumber = count;

    const counter = setInterval(() => {
      const progress = EaseOut( ++currentNumber / stepTime );
      
      // num * progress로 숫자 점점 느려짐 (EaseOut)
      setCount(Math.round( num * progress ));

      // currentNumber가 stepTime과 같을 때 clearInterval
      // if(progress === 1)
      if(currentNumber === stepTime)
        clearInterval(counter);
    }, frameRate);
  }, [num]);

  return count;
}

export default useCount;