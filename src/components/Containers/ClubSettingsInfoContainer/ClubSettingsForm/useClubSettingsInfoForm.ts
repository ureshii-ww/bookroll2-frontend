import SendSettingsDataArgs from './types/send-settings-data-args';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { updateClubSettingsInfo } from '../../../../store/reducers/club-settings/info';

const useClubSettingsInfoForm = () => {
  const dispatch = useAppDispatch();

  const sendSettingsData = (args: SendSettingsDataArgs) => {
    dispatch(updateClubSettingsInfo(args));
  }

  return sendSettingsData;
};

export default useClubSettingsInfoForm;