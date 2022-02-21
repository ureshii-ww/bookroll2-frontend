import { useEffect, useState } from 'react';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';
import { createWheelSegments, removeSegment, shuffleWheelSegments } from '../helpers';
import { ClubBooks } from '../../../../models/club-books';

const useWheelSegments = (clubBooks: ClubBooks[]) => {
  const [wheelSegments, setWheelSegments] = useState<WheelSegment[]>([]);

  const shuffleSegments = () => {
    setWheelSegments(shuffleWheelSegments(wheelSegments));
  };

  const removeWinnerSegment = (segment: WheelSegment) => {
    setWheelSegments([...removeSegment(wheelSegments, segment)]);
  };

  const createStartingSegments = () => {
    const wheelSegments = createWheelSegments(clubBooks);
    const shuffledWheelSegments = shuffleWheelSegments(wheelSegments);
    setWheelSegments(shuffledWheelSegments);
  };

  useEffect(() => {
    createStartingSegments()
  }, []);

  return { wheelSegments, shuffleSegments, removeWinnerSegment };
};

export default useWheelSegments;