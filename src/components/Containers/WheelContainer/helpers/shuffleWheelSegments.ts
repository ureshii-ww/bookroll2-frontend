import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';

const shuffleWheelSegments = (wheelSegments: WheelSegment[]) => {
  let tempArray = [...wheelSegments];
  let currentIndex = wheelSegments.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [tempArray[currentIndex], tempArray[randomIndex]] = [tempArray[randomIndex], tempArray[currentIndex]];
  }
  return tempArray;
};

export default shuffleWheelSegments;