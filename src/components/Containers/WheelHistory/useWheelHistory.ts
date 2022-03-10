import ClubService from '../../../services/club.service';
import { RouteNames } from '../../../routes/route-names.enum';
import { useActions } from '../../../hooks/useActions';
import { useNavigate, useParams } from 'react-router-dom';
import useRequest from '../../../hooks/useRequest';
import { WheelWinnerInfo } from '../../../models/wheel-winner-info';

const useWheelHistory = (rollsHistory: WheelWinnerInfo[]) => {
  const {clubUrl} = useParams();
  const { addNotification } = useActions();
  const navigate = useNavigate();
  return useRequest('Page', async (index: number) => {
    const response = await ClubService.confirmBook(clubUrl || '', rollsHistory[index].book.id || '');
    if (response.data === 'Success') {
      addNotification('Книга успешно выбрана', 'success');
      navigate(`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`);
    }
  });
};

export default useWheelHistory;