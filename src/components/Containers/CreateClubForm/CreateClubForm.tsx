import React, { FC } from 'react';
import InputText from '../../UI/InputText/InputText';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import SubmitButton from '../../UI/SubmitButton/SubmitButton';
import CreateClubFormInput from './types/create-club-form-inputs';
import authDataLength from '../../../constants/auth-data-length';
import './create-club-form.scss';
import { useCreateClubForm } from './useCreateClubForm';

const CreateClubForm: FC = () => {
  const {handleCreateClub} = useCreateClubForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClubFormInput>();

  const onSubmit: SubmitHandler<CreateClubFormInput> = data => handleCreateClub(data.clubname);

  return (
    <div className="create-club-form">
      <h1 className="create-club-form__title">Создать клуб</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="create-club-form__group">
          <Controller
            name="clubname"
            control={control}
            defaultValue={''}
            rules={{
              required: true,
              minLength: authDataLength.CLUBNAME_MIN_LENGTH,
              maxLength: authDataLength.CLUBNAME_MAX_LENGTH,
            }}
            render={({ field }) => <InputText {...field} placeholder="Имя клуба" />}
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
        </div>
        <SubmitButton className="create-club-form__button">Создать клуб</SubmitButton>
      </form>
    </div>
  );
};

export default CreateClubForm;
