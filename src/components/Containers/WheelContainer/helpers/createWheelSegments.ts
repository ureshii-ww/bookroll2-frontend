import { ClubBooks } from '../../../../models/club-books';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';

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

export default createWheelSegments;