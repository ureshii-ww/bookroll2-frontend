import { useActions } from '../../../hooks/useActions';
import ClubService from '../../../services/club.service';
import { useRequestPost } from '../../../hooks/useRequestPost';

const useClubSettingsForm = () => {
  const { addNotification, closeModal } = useActions();

  const sendSettingsData = useRequestPost(
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