import React, { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import InputText from '../../../UI/InputText/InputText';
import SubmitButton from '../../../UI/SubmitButton/SubmitButton';
import './club-settings-form.scss';
import InputTextarea from '../../../UI/InputTextarea/InputTextarea';
import InputSelect from '../../../UI/InputSelect/InputSelect';
import useClubSettingsInfoForm from './useClubSettingsInfoForm';
import authDataLength from '../../../../constants/auth-data-length';
import ClubSettingsInfoFormInputs from './types/club-settings-form-inputs';
import ClubSettingsInfoFormProps from './types/club-settings-info-form-props';

const ClubSettingsInfoForm: FC<ClubSettingsInfoFormProps> = ({ clubSettingsInfo, disabled, clubUrl, ...rest }) => {
  const { clubname, rules, members } = clubSettingsInfo;
  const sendSettingsData = useClubSettingsInfoForm();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ClubSettingsInfoFormInputs>();

  const onSubmit: SubmitHandler<ClubSettingsInfoFormInputs> = data =>
    sendSettingsData({
      clubUrl,
      clubname: data.clubname,
      masterUrl: data.master,
      description: data.rules,
    });

  return (
    <form className="club-settings-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="club-settings-form__group">
        <label className="club-settings-form__label" htmlFor="clubname">
          Имя клуба
        </label>
        <Controller
          name="clubname"
          control={control}
          defaultValue={clubname}
          rules={{
            required: true,
            minLength: authDataLength.CLUBNAME_MIN_LENGTH,
            maxLength: authDataLength.CLUBNAME_MAX_LENGTH,
          }}
          render={({ field }) => <InputText disabled={disabled} {...field} />}
        />
        {errors.clubname?.type === 'required' && <div className="club-settings-form__error">Введите имя клуба</div>}
        {errors.clubname?.type === 'minLength' && (
          <div className="club-settings-form__error">
            Имя клуба должно быть не короче {authDataLength.CLUBNAME_MIN_LENGTH} символов
          </div>
        )}
        {errors.clubname?.type === 'maxLength' && (
          <div className="club-settings-form__error">
            Имя клуба должно быть не длинее {authDataLength.CLUBNAME_MAX_LENGTH} символов
          </div>
        )}
      </fieldset>
      <fieldset className="club-settings-form__group">
        <label className="club-settings-form__label" htmlFor="master">
          Управляющий
        </label>
        <Controller
          name="master"
          control={control}
          rules={{ required: true }}
          defaultValue={members[0]?.url || ''}
          render={({ field }) => (
            <InputSelect disabled={disabled} {...field}>
              {members.map(member => (
                <option key={`master-${member.url}`} value={member.url}>
                  {member.username}
                </option>
              ))}
            </InputSelect>
          )}
        />
      </fieldset>
      <fieldset className="club-settings-form__group">
        <label className="club-settings-form__label" htmlFor="description">
          Описание
        </label>
        <Controller
          name="rules"
          control={control}
          defaultValue={rules}
          render={({ field }) => <InputTextarea {...field} placeholder="Введите описание клуба" disabled={disabled} />}
        />
      </fieldset>
      <div className="club-settings-form__button">
        <SubmitButton disabled={disabled}>Сохранить</SubmitButton>
      </div>
    </form>
  );
};

export default ClubSettingsInfoForm;
