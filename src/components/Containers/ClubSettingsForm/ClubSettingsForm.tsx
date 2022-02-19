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
import './club-settings-form.scss';
import InputTextarea from '../../UI/InputTextarea/InputTextarea';
import InputSelect from '../../UI/InputSelect/InputSelect';

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
    <form className="club-settings-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="club-settings-form__group">
        <label className="club-settings-form__label" htmlFor="clubname">
          Имя клуба
        </label>
        <Controller
          name="clubname"
          control={control}
          defaultValue={clubname}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} />}
        />
      </div>
      <div className="club-settings-form__group">
        <label className="club-settings-form__label" htmlFor="master">
          Управляющий
        </label>
        <Controller
          name="master"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputSelect {...field}>
            {members.map(member => (
              <option key={`master-${member.url}`} value={member.url}>
                {member.username}
              </option>
            ))}
          </InputSelect>}
        />
      </div>
      <div className="club-settings-form__group">
        <label className="club-settings-form__label" htmlFor="description">
          Описание
        </label>
        <Controller
          name="description"
          control={control}
          defaultValue={description}
          render={({ field }) => <InputTextarea {...field} placeholder="Введите описание клуба" />}
        />
      </div>
      <div className="club-settings-form__button">
        <SubmitButton>Сохранить</SubmitButton>
      </div>
    </form>
  );
};

export default ClubSettingsForm;
