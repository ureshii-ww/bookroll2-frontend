import React, { useEffect, useState } from 'react';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';
import { useParams } from 'react-router-dom';
import WheelContainer from '../../Containers/WheelContainer/WheelContainer';
import { ClubBooks } from '../../../models/club-books';

const WheelPage = () => {
  const { clubUrl } = useParams();
  const [clubBooks, setClubBooks] = useState<ClubBooks[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const getClubBooks = useRequestPage(async () => {
    const response = await ClubService.getClubBooks(clubUrl || '');
    setClubBooks(response.data);
    setIsLoaded(true);
  });

  useEffect(() => {
    getClubBooks();
  }, []);

  return isLoaded ? (
    <div>
      <WheelContainer clubBooks={clubBooks} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default WheelPage;