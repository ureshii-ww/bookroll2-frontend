import { useEffect, useState } from 'react';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';
import { ClubBooks } from '../../../../models/club-books';
import shuffleWheelSegments from '../helpers/shuffleWheelSegments';
import removeSegment from '../helpers/removeSegment';
import createWheelSegments from '../helpers/createWheelSegments';

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
    createStartingSegments();
  }, []);

  return { wheelSegments, shuffleSegments, removeWinnerSegment };
};

export default useWheelSegments;
