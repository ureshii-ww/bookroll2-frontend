import React, { FC } from 'react';
import { ClubSettingsInfo } from '../../../models/club-settings-info';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import InputText from '../../UI/InputText/InputText';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import { useRequestPage } from '../../../hooks/useRequestPage';
import ClubService from '../../../services/club.service';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../routes/route-names.enum';
import { useActions } from '../../../hooks/useActions';

interface ClubSettingsFormProps {
  clubSettingsInfo: ClubSettingsInfo;
  clubUrl: string;
}

interface Inputs {
  clubname: string;
  master: string;
  description: string;
}

const ClubSettingsForm: FC<ClubSettingsFormProps> = ({ clubSettingsInfo, clubUrl, ...rest }) => {
  const { clubname, description, members } = clubSettingsInfo;
  const { addNotification } = useActions();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const sendSettingsData = useRequestPage(
    async (clubUrl: string, clubname: string, masterUrl: string, description: string) => {
      const response = await ClubService.updateSettings(clubUrl, clubname, masterUrl, description);
      if (response.data === 'Success') {
        addNotification('Настройки успешно обновлены', 'success');
        navigate(`${RouteNames.CLUB_PROFILE_BASE}${clubUrl}`);
      }
    }
  );

  const onSubmit: SubmitHandler<Inputs> = data =>
    sendSettingsData(clubUrl, data.clubname, data.master, data.description);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="clubname"
        control={control}
        defaultValue={clubname}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} />}
      />
      <select {...register('master')}>
        {members.map(member => (
          <option key={`master-${member.url}`} value={member.url}>
            {member.username}
          </option>
        ))}
      </select>
      <textarea {...register('description')} defaultValue={description} />
      <SubmitButton>Сохранить</SubmitButton>
    </form>
  );
};

export default ClubSettingsForm;
