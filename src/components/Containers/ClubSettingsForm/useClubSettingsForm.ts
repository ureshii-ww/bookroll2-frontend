import { useActions } from '../../../hooks/useActions';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';

const useClubSettingsForm = () => {
  const { addNotification, closeModal } = useActions();

  const sendSettingsData = useRequestPage(
    async (clubUrl: string, clubname: string, masterUrl: string, description: string) => {
      const response = await ClubService.updateSettings(clubUrl, clubname, masterUrl, description);
      if (response.data === 'Success') {
        addNotification('Настройки успешно обновлены', 'success');
        closeModal();
      }
    }
  );

  return sendSettingsData;
};

export default useClubSettingsForm;