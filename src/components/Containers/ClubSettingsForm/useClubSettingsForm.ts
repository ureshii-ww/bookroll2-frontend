import { useActions } from '../../../hooks/useActions';
import ClubService from '../../../services/club.service';
import { useRequestPost } from '../../../hooks/useRequestPost';
import SendSettingsDataArgs from './types/send-settings-data-args';

const useClubSettingsForm = () => {
  const { addNotification, closeModal } = useActions();

  const sendSettingsData = useRequestPost<SendSettingsDataArgs>(
    async (args) => {
      const {clubUrl, clubname, masterUrl, description} = args;
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