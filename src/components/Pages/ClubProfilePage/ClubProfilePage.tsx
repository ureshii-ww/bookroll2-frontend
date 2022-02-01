import React, { useEffect, useState } from 'react';
import ClubProfileHeader from '../../Containers/ClubProfileHeader/ClubProfileHeader';
import { useParams } from 'react-router-dom';

const ClubProfilePage = () => {
  const { clubUrl } = useParams();
  const [isMaster, setIsMaster] = useState(false)

  return (
    <div>
      <ClubProfileHeader clubUrl={clubUrl} setIsMaster={(value) => setIsMaster(value)}/>
    </div>
  );
};

export default ClubProfilePage;