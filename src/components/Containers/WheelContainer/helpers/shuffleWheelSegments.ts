import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';

const shuffleWheelSegments = (wheelSegments: WheelSegment[]) => {
  let tempArray = [...wheelSegments];
  const length = tempArray.length - 1;
  for (let i = length; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }

  return tempArray;
};

export default shuffleWheelSegments;
