import $api from '../api';
import { BookData } from '../models/book-data';

const BOOK_PREFIX = 'book/';

const BookService = {
  getRandomBook: async () => {
    return $api.get<BookData>(BOOK_PREFIX + 'random');
  },

  confirmBook: async (bookData: BookData) => {
    return $api.post(BOOK_PREFIX + 'confirm', { book: bookData });
  },

  getBookData: async (bookId: string) => {
    return $api.get<BookData>(`${BOOK_PREFIX}${bookId}`);
  },
};

export default BookService;