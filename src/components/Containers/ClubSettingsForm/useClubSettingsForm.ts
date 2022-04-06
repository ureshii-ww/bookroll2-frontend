import { useActions } from '../../../hooks/useActions';
import ClubService from '../../../services/club.service';
import useRequest from '../../../hooks/useRequest';
import SendSettingsDataArgs from './types/send-settings-data-args';
import { closeModal } from '../../../store/reducers/modal';
import useAppDispatch from '../../../hooks/useAppDispatch';

const useClubSettingsForm = () => {
  const { addNotification } = useActions();
  const dispatch = useAppDispatch();

  const sendSettingsData = useRequest<SendSettingsDataArgs>('Post', async args => {
    const { clubUrl, clubname, masterUrl, description } = args;
    const response = await ClubService.updateSettings(clubUrl, clubname, masterUrl, description);
    if (response.data === 'Success') {
      addNotification('Настройки успешно обновлены', 'success');
      dispatch(closeModal());
    }
  });

  return sendSettingsData;
};

export default useClubSettingsForm;