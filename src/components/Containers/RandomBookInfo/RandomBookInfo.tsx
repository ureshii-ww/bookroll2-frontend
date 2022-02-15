import React, { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useRequestPage } from '../../../hooks/useRequestPage';
import BookService from '../../../services/book.service';
import MainButton from '../../UI/MainButton/MainButton';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useActions } from '../../../hooks/useActions';

const RandomBookInfo = () => {
  const [bookData, setBookData] = useState<BookData>({
    title: '',
    authors: [''],
    year: '',
    cover: '',
    description: '',
    genres: [''],
  });
  const isLoading = useAppSelector(state => state.event.isLoadingPage);

  const getBook = useRequestPage(async () => {
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  });

  const {addNotification} = useActions();
  const confirmBook = useRequestPage(async (bookData: BookData) => {
    await BookService.confirmBook(bookData);
    await addNotification('Книга добавлена', 'success');
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  });

  useEffect(() => {
    getBook();
  }, []);

  return !isLoading ? (
    <div>
      <img src={bookData.cover} alt={bookData.title} />
      <h1>{bookData.title}</h1>
      <p>{bookData.authors.join(', ')}</p>
      <p>{bookData.genres.join(', ')}</p>
      <p>{bookData.year}</p>
      <p>{bookData.description}</p>
      <MainButton onClick={() => confirmBook(bookData)}>Подтвердить</MainButton>
      <MainButton onClick={() => getBook()}>Искать ещё</MainButton>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default RandomBookInfo;
