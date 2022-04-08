import useAppDispatch from '../../../../hooks/useAppDispatch';
import { updatePassword } from '../../../../store/reducers/user-settings/account';

export const useUserSettingsPasswordForm = (userUrl: string) => {
  const dispatch = useAppDispatch();
  const handleUpdatePassword = (oldPassword: string, newPassword: string) => {
    dispatch(updatePassword({ userUrl, oldPassword, newPassword }))
  }

  return handleUpdatePassword;
}