import React, { Fragment, useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useRequestPage } from '../../../hooks/useRequestPage';
import BookService from '../../../services/book.service';
import MainButton from '../../UI/MainButton/MainButton';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useActions } from '../../../hooks/useActions';
import BookDataView from '../../UI/BookDataView/BookDataView';
import './random-book-container.scss';

const RandomBookContainer = () => {
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
    addNotification('Книга добавлена', 'success');
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  });

  useEffect(() => {
    getBook();
  }, []);

  return !isLoading ? (
    <Fragment>
      <div className="random-book__view">
        <BookDataView book={bookData}/>
      </div>
      <div className="random-book__buttons">
        <MainButton className="main-button--green" onClick={() => confirmBook(bookData)}>Подтвердить</MainButton>
        <MainButton className="main-button--red" onClick={() => getBook()}>Искать ещё</MainButton>
      </div>
    </Fragment>
  ) : (
    <div>Loading</div>
  );
};

export default RandomBookContainer;
