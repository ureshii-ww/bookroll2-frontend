import { ClubBooks } from '../../../../models/club-books';
import { WheelSegment } from '../../../UI/WinWheel/models/wheel-segment';
import { WheelWinnerInfo } from '../../../../models/wheel-winner-info';

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

export default findWinnerInfoBySegment;