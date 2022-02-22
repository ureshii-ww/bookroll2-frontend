import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';

const removeSegment = (wheelSegments: WheelSegment[], winnerSegment: WheelSegment) => {
  return wheelSegments.filter(
    wheelSegment =>
      !(
        wheelSegment.value?.userUrl === winnerSegment.value?.userUrl &&
        wheelSegment.value?.bookId === winnerSegment.value?.bookId
      )
  );
};

export default removeSegment;