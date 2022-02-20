import { useActions } from '../../../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';
import { RouteNames } from '../../../routes/route-names.enum';

const useClubSettingsForm = () => {
  const { addNotification } = useActions();
  const navigate = useNavigate();

  const sendSettingsData = useRequestPage(
    async (clubUrl: string, clubname: string, masterUrl: string, description: string) => {
      const response = await ClubService.updateSettings(clubUrl, clubname, masterUrl, description);
      if (response.data === 'Success') {
        addNotification('Настройки успешно обновлены', 'success');
        navigate(`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`);
      }
    }
  );

  return sendSettingsData;
};

export default useClubSettingsForm;