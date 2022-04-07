import { ClubSettingsInfo } from '../../../../../models/club-settings-info';

export default interface ClubSettingsInfoFormProps {
  clubSettingsInfo: ClubSettingsInfo;
  clubUrl: string;
  disabled?: boolean;
}