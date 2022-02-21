import { ClubBooks } from '../../../models/club-books';
import { WheelSegment } from '../../UI/WinWheel/models/wheel-segment';
import { WheelWinnerInfo } from '../../../models/wheel-winner-info';

const createWheelSegments = (clubBooks: ClubBooks[]) => {
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
};

const findWinnerInfoBySegment = (clubBooks: ClubBooks[], segment: WheelSegment): WheelWinnerInfo => {
  const indexUser = clubBooks.findIndex(entry => entry.user.url === segment.value?.userUrl);
  const indexBook = clubBooks[indexUser].books.findIndex(book => book.id === segment.value?.bookId);
  return {
    user: clubBooks[indexUser].user,
    book: clubBooks[indexUser].books[indexBook],
    indexBook,
    indexUser,
  };
};

const removeSegment = (wheelSegments: WheelSegment[], winnerSegment: WheelSegment) => {
  return wheelSegments.filter(
    wheelSegment =>
      !(
        wheelSegment.value?.userUrl === winnerSegment.value?.userUrl &&
        wheelSegment.value?.bookId === winnerSegment.value?.bookId
      )
  );
};

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

const countSpinsNumber = (spinTime: number) => {
  const rangeNumber = 3;
  const divider = Math.floor(spinTime / rangeNumber)
  const minNumber = spinTime - divider;
  const maxNumber = spinTime + divider;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

export { createWheelSegments, findWinnerInfoBySegment, shuffleWheelSegments, removeSegment, countSpinsNumber };