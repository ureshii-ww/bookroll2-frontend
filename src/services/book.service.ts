import $api from '../api';
import { RandomBookData } from '../models/random-book-data';

const BOOK_PREFIX = 'book/';

const BookService = {
  getRandomBook: async () => {
    return $api.get<RandomBookData>(BOOK_PREFIX + 'random')
  },

  confirmBook: async (bookData: RandomBookData) => {
    return $api.post(BOOK_PREFIX + 'confir', { book: bookData })
  }
}

export default BookService;