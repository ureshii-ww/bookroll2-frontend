import { useEffect, useState } from 'react';
import { WheelSegment } from '../components/UI/WinWheel/models/wheel-segment';
import { ClubBooks } from '../models/club-books';
import { WheelWinnerInfo } from '../models/wheel-winner-info';

const useWheelContainer = (clubBooks: ClubBooks[]) => {
  const [wheelSegments, setWheelSegments] = useState<WheelSegment[]>([]);
  const [winnerInfo, setWinnerInfo] = useState<WheelWinnerInfo | null>(null);
  const [currentStage, setCurrentStage] = useState<'start' | 'roll' | 'bookInfo' | 'finish'>('start');

  const handleWinner = (segment: WheelSegment) => {
    setWinnerInfo(findWinnerInfoBySegment(clubBooks, segment));
    setWheelSegments(removeSegment(wheelSegments, segment));
    if (wheelSegments.length === 2) {
      setCurrentStage('finish');
    } else {
      setCurrentStage('bookInfo');
    }
  };

  const startRoll = () => {
    setWheelSegments(shuffleWheelSegments(wheelSegments));
    setCurrentStage('roll');
  };

  useEffect(() => {
    const wheelSegments = createWheelSegments(clubBooks);
    const shuffledWheelSegments = shuffleWheelSegments(wheelSegments);
    setWheelSegments(shuffledWheelSegments);
  }, []);

  return { winnerInfo, wheelSegments, currentStage, handleWinner, startRoll };
};

function createWheelSegments(clubBooks: ClubBooks[]) {
  const wheelSegments: WheelSegment[] = [];

  for (let i = 0; i < clubBooks.length; i++) {
    const item = clubBooks[i];
    for (let j = 0; j < item.books.length; j++) {
      wheelSegments.push({
        text: item.user.username,
        fillStyle: item.user.color,
        value: {
          bookId: item.books[j].id,
          userUrl: item.user.url,
        },
      });
    }
  }

  return wheelSegments;
}

function findWinnerInfoBySegment(clubBooks: ClubBooks[], segment: WheelSegment): WheelWinnerInfo {
  const indexUser = clubBooks.findIndex(entry => entry.user.url === segment.value?.userUrl);
  const indexBook = clubBooks[indexUser].books.findIndex(book => book.id === segment.value?.bookId);
  return {
    user: clubBooks[indexUser].user,
    book: clubBooks[indexUser].books[indexBook],
  };
}

function removeSegment(wheelSegments: WheelSegment[], segment: WheelSegment) {
  const tempArray = [...wheelSegments];
  const index = tempArray.findIndex(
    item => item.value?.userUrl === segment.value?.userUrl && item.value?.bookId === segment.value?.bookId
  );
  tempArray.splice(index, 1)
  return tempArray;
}

function shuffleWheelSegments(wheelSegments: WheelSegment[]) {
  let tempArray = [...wheelSegments];
  let currentIndex = wheelSegments.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [tempArray[currentIndex], tempArray[randomIndex]] = [tempArray[randomIndex], tempArray[currentIndex]];
  }
  return tempArray;
}

export default useWheelContainer;
