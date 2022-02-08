import React, { FC, useEffect, useState } from 'react';
import { ClubBooks } from '../../../models/club-books';
import { useRequestTab } from '../../../hooks/useRequestTab';
import ClubService from '../../../services/club.service';
import { useClubProfileContext } from '../../Pages/ClubProfilePage/ClubProfilePage';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ClubBooksCard from '../../UI/ClubBooksCard/ClubBooksCard';

const ClubProfileBooks: FC = () => {
  const [booksData, setBooksData] = useState<ClubBooks[]>([]);
  const { isMaster, clubUrl } = useClubProfileContext();
  const isLoading = useAppSelector(state => state.event.isLoadingTab)
  const [fetchBooksData, booksDataError] = useRequestTab(async (clubUrl: string) => {
    const response = await ClubService.getClubBooks(clubUrl);
    setBooksData(response.data);
  })

  useEffect(() => {
    fetchBooksData(clubUrl);
  }, [clubUrl])

  return (
    !isLoading && booksData.length > 0
      ?
      <div>
        {booksData.map(data =>
          <ClubBooksCard key={`${clubUrl}-${data.user.url}-books`} books={data.books} user={data.user}/>
        )}
      </div>
      :
      !isLoading && booksData.length === 0
        ?
        <div>
          Участники ещё не выбрали книги
        </div>
        :
        <div>Loading...</div>
  );
};

export default ClubProfileBooks;