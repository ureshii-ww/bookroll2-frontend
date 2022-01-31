import React, { useEffect, useState } from 'react';
import { BookData } from '../../../models/book-data';
import { useFetch } from '../../../hooks/useFetch';
import BookService from '../../../services/book.service';
import MainButton from '../../UI/MainButton/MainButton';

const RandomBookInfo = () => {
  const [bookData, setBookData] = useState<BookData>({
    title: '',
    authors: [''],
    year: '',
    cover: '',
    description: '',
    genres: ['']
  })
  const [isLoaded, setIsLoaded] = useState(false)

  const [fetchData, isFetched, error] = useFetch(async () => {
    const response = await BookService.getRandomBook();
    setBookData(response.data);
    setIsLoaded(isFetched);
  })

  const [fetchConfirm, isConfirmed, errorConfirm] = useFetch(async (bookData: BookData) => {
    await BookService.confirmBook(bookData);
    fetchData();
  })

  useEffect(() => {
    fetchData()
  }, [])

  const handleConfirm = (bookData: BookData) => {
    fetchConfirm(bookData)
  }

  return (
    isFetched ?
      <div>
        <img src={bookData.cover} alt={bookData.title}/>
        <h1>{bookData.title}</h1>
        <p>{bookData.authors.join(', ')}</p>
        <p>{bookData.genres.join(', ')}</p>
        <p>{bookData.year}</p>
        <p>{bookData.description}</p>
        <MainButton onClick={() => fetchConfirm(bookData)}>Подтвердить</MainButton>
      </div> :
      <div>
        Loading
      </div>
  );
};

export default RandomBookInfo;