import { useEffect, useState } from 'react';
import { BookData } from '../models/book-data';
import { useInfiniteScroll } from './useInfiniteScroll';
import { useRequestTab } from './useRequestTab';
import UserService from '../services/user.service';

const useUserProfileBooks = (userUrl: string) => {
  const chunkSize = 10;
  const [booksArray, setBooksArray] = useState<BookData[]>([]);
  const [isOut, setIsOut] = useState<boolean>(false);
  const { pageNum, setPageNum, containerRef } = useInfiniteScroll();

  const makeNewBooksArray = (oldArray: BookData[], newArray: BookData[], listLength: number) => {
    const all: BookData[] = [...oldArray, ...newArray];
    setBooksArray(all);
    if (all.length === listLength) {
      setIsOut(true);
    }
  }

  const fetchBooksArray = useRequestTab(async (userUrl: string, pageNum: number, chunkSize: number) => {
    const response = await UserService.getUserBooks(userUrl, pageNum, chunkSize);
    const listLength = parseInt(response.headers['x-data-length']);
    makeNewBooksArray(booksArray, response.data, listLength)
  });

  const fetchDeleteBook = useRequestTab(async (userUrl: string, index: number) => {
    const response = await UserService.deleteBook(userUrl, index);
    if (response.data === 'Success') {
      const copyOfBooksArray = [...booksArray];
      copyOfBooksArray.splice(index, 1);
      const pageNumOfDeletedBook = countPageNumOfIndex(index, chunkSize);
      const response = await UserService.getUserBooks(userUrl, pageNumOfDeletedBook, chunkSize);
      const arrayOfAdditionalBooks = response.data.filter(
        additionalBook =>
          !copyOfBooksArray.some(
            bookInArray =>
              additionalBook.title === bookInArray.title &&
              additionalBook.authors.join('') === bookInArray.authors.join('')
          )
      );
      const listLength = parseInt(response.headers['x-data-length']);
      makeNewBooksArray(copyOfBooksArray, arrayOfAdditionalBooks, listLength);
    }
  });

  useEffect(() => {
    if (!isOut) {
      fetchBooksArray(userUrl, pageNum, chunkSize);
    }
  }, [pageNum]);

  return { booksArray, containerRef, isOut, fetchBooksArray, fetchDeleteBook };
};

export default useUserProfileBooks;

function countPageNumOfIndex(index: number, chunkSize: number) {
  return Math.floor(index / chunkSize) + 1;
}
