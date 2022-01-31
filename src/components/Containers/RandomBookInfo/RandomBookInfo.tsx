import React, { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useFetch } from '../../../hooks/useFetch';
import BookService from '../../../services/book.service';
import MainButton from '../../UI/MainButton/MainButton';
import { useAppSelector } from '../../../hooks/useAppSelector';

const RandomBookInfo = () => {
  const [bookData, setBookData] = useState<BookData>({
    title: '',
    authors: [''],
    year: '',
    cover: '',
    description: '',
    genres: ['']
  })
  const { isLoading } = useAppSelector(state => state.event)

  const [getBook,  error] = useFetch(async () => {
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  })

  const [confirmBook, errorConfirm] = useFetch(async (bookData: BookData) => {
    await BookService.confirmBook(bookData);
    const response = await BookService.getRandomBook();
    setBookData(response.data);
  })

  useEffect(() => {
    getBook()
  }, [])


  return (
    !isLoading ?
      <div>
        <img src={bookData.cover} alt={bookData.title}/>
        <h1>{bookData.title}</h1>
        <p>{bookData.authors.join(', ')}</p>
        <p>{bookData.genres.join(', ')}</p>
        <p>{bookData.year}</p>
        <p>{bookData.description}</p>
        <MainButton onClick={() => confirmBook(bookData)}>Подтвердить</MainButton>
        <MainButton onClick={() => getBook()}>Искать ещё</MainButton>
      </div> :
      <div>
        Loading
      </div>
  );
};

export default RandomBookInfo;